import json
import io
from ged4py.parser import GedcomReader


class Converter:
    def __init__(self, gedcom_input):
        b = gedcom_input.encode("utf-8")
        file = io.BytesIO(b)
        self._parser = GedcomReader(file, encoding="utf-8")

    @staticmethod
    def _get_date_from_record(indi, type):
        birth_tag = indi.sub_tag(type)
        if (not birth_tag):
            return ""
        birth_tag_value = birth_tag.sub_tag_value("DATE")

        if (not birth_tag_value):
            return ""

        if (birth_tag_value.kind.name == 'SIMPLE'):
            return birth_tag_value.date.original

        if (birth_tag_value.kind.name == 'PHRASE'):
            return birth_tag_value.phrase

        if (birth_tag_value.kind.name == 'ABOUT'):
            return "About %d".format(birth_tag_value.date)

        return ""

    def _get_label(self, indi):
        dob = "* " + self._get_date_from_record(indi, "BIRT")
        dod = "\u2020 " + self._get_date_from_record(indi, "DEAT")

        label = "{}\n{}\n{}".format(indi.name.format(), dob, dod)
        return label

    def convert(self):
        nodes = list()
        node_ids = set()
        edges = list()

        # records = self._parser.records0("INDI")

        for i, indi in enumerate(self._parser.records0("INDI")):
            if indi.xref_id not in node_ids:
                node_data = {
                    "data": {
                        "id": indi.xref_id,
                        "label": self._get_label(indi),
                        "sex": indi.sex
                    }
                }
                nodes.append(node_data)
                node_ids.add(indi.xref_id)

        for i, indi in enumerate(self._parser.records0("INDI")):
            if indi.father:
                edges.append({"data": {"id": indi.xref_id + indi.father.xref_id, "source": indi.xref_id, "target": indi.father.xref_id}})
            if indi.mother:
                edges.append({"data": {"id": indi.xref_id + indi.mother.xref_id, "source": indi.xref_id, "target": indi.mother.xref_id}})

        output = {
            "nodes": nodes,
            "edges": edges
        }

        return output
