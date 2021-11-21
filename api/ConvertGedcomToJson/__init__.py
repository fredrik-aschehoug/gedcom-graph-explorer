from ConvertGedcomToJson.Converter import Converter
import logging
import azure.functions as func
import json


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        req_body = req.get_json()
    except ValueError:
        return func.HttpResponse(
            "Invalid request, could not parse the request body.",
            status_code=500
        )
    else:
        data = req_body.get('data')

    if (isinstance(data, str)):
        converter = Converter(data)
        result = converter.convert()
        return func.HttpResponse(json.dumps(result))

    else:
        return func.HttpResponse(
            "Invalid request, the 'data' property in the request body is not a string.",
            status_code=500
        )
