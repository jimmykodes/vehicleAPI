import json
import os

from flask import Flask, request, jsonify

from db import DataBase
from models import Fuel, OilChange

app = Flask(__name__)

database = DataBase()


@app.route('/fuel', methods=("post", "get"))
def fuel_handler():
    if request.headers.get("authentication-key") != os.environ.get("API_KEY"):
        return "permission denied", 401
    if request.method == "GET":
        vehicle = request.args.get('vehicle')
        print(vehicle)
        fuel = database.list_fuel(vehicle)
        return jsonify([f.serialize() for f in fuel])

    data = json.loads(request.data)
    fuel = Fuel(**data)
    try:
        database.insert_fuel(fuel)
        return "success", 201
    except:
        return "error", 500


@app.route('/oil_change', methods=("post", "get"))
def oil_change_handler():
    if request.headers.get("authentication-key") != os.environ.get("API_KEY"):
        return "permission denied", 401
    if request.method == "GET":
        vehicle = request.args.get("vehicle")
        oil_changes = database.list_oil(vehicle)
        return jsonify([o.serialize() for o in oil_changes])
    data = json.loads(request.data)
    oil_change = OilChange(**data)
    try:
        database.insert_oil(oil_change)
        return "success", 201
    except:
        return "error", 500
