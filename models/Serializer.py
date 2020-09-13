import decimal
from datetime import date

NoFieldsError = Exception("No Fields Specified")


def get_val(o, field):
    val = getattr(o, field)
    if isinstance(val, decimal.Decimal):
        return float(val)
    if isinstance(val, date):
        return date.strftime(val, "%Y-%m-%d")
    return val


class Serializer:
    fields = []

    def serialize(self):
        if len(self.fields) == 0:
            raise NoFieldsError
        return {field: get_val(self, field) for field in self.fields}
