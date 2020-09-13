import os

import mysql.connector

from db import queries
from models import Fuel, OilChange


class DataBase:
    def __init__(self):
        self.connection = mysql.connector.connect(
            host=os.environ.get("MYSQL_HOST", "db"),
            port=os.environ.get("MYSQL_PORT", "3306"),
            user=os.environ.get("MYSQL_USER", "user"),
            password=os.environ.get("MYSQL_PASSWORD", "password")
        )

    def insert_fuel(self, fuel):
        cursor = self.connection.cursor()
        cursor.execute(
            queries.insert_fuel, [
                fuel.vehicle,
                fuel.odometer,
                fuel.tripometer,
                fuel.oil_level,
                fuel.gallons,
                fuel.dollars,
                fuel.date
            ]
        )
        self.connection.commit()

    def list_fuel(self, vehicle):
        cursor = self.connection.cursor()
        if vehicle is not None:
            cursor.execute(queries.list_fuel_by_vehicle, [vehicle])
        else:
            cursor.execute(queries.list_fuel)
        results = cursor.fetchall()
        return [Fuel(*res) for res in results]

    def insert_oil(self, oil_change):
        cursor = self.connection.cursor()
        cursor.execute(
            queries.insert_oil, [
                oil_change.vehicle,
                oil_change.odometer,
                oil_change.date,
            ]
        )
        self.connection.commit()

    def list_oil(self, vehicle):
        cursor = self.connection.cursor()
        if vehicle is not None:
            cursor.execute(queries.list_oil_by_vehicle, [vehicle])
        else:
            cursor.execute(queries.list_oil)
        results = cursor.fetchall()
        return [OilChange(*res) for res in results]


