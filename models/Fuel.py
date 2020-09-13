from models.Serializer import Serializer


class Fuel(Serializer):
    fields = [
        "id",
        "vehicle",
        "odometer",
        "tripometer",
        "oil_level",
        "gallons",
        "dollars",
        "date"
    ]

    def __init__(
            self,
            id=None,
            vehicle=None,
            odometer=None,
            tripometer=None,
            oil_level=None,
            gallons=None,
            dollars=None,
            date=None
    ):
        self.id = id
        self.vehicle = vehicle
        self.tripometer = tripometer
        self.odometer = odometer
        self.oil_level = oil_level
        self.gallons = gallons
        self.dollars = dollars
        self.date = date
