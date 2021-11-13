from ConvertGedcomToJson.Converter import Converter
import logging
import azure.functions as func
import json


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        req_body = req.get_json()
    except ValueError:
        pass
    else:
        data = req_body.get('data')

    if (isinstance(data, str)):
        logging.info('Hello world ')
        converter = Converter(data)
        result = converter.convert()
        return func.HttpResponse(json.dumps(result))

    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
            status_code=200
        )
