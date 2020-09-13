from models.Serializer import Serializer


class OilChange(Serializer):
    fields = [
        "id",
        "vehicle",
        "odometer",
        "date",
    ]

    def __init__(self, id=None, vehicle=None, odometer=None, date=None):
        self.id = id
        self.vehicle = vehicle
        self.odometer = odometer
        self.date = date

