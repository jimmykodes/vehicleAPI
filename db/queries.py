insert_fuel = '''
    INSERT INTO vehicles.fuel (
        vehicle,
        odometer,
        tripometer,
        oil_level,
        gallons,
        dollars,
        `date`
    ) VALUES (%s, %s, %s, %s, %s, %s, %s);
'''

list_fuel = '''
    SELECT id, vehicle, odometer, tripometer, oil_level, gallons, dollars, `date`
    FROM vehicles.fuel
    ORDER BY `date`;
'''

list_fuel_by_vehicle = '''
    SELECT id, vehicle, odometer, tripometer, oil_level, gallons, dollars, `date`
    FROM vehicles.fuel
    WHERE vehicle = %s
    ORDER BY `date`;
'''

insert_oil = '''
    INSERT INTO vehicles.oil_change (
        vehicle,
        odometer,
        date
    ) VALUES (%s, %s, %s);
'''

list_oil = '''
    SELECT id, vehicle, odometer, `date`
    FROM vehicles.oil_change
    ORDER BY `date`;
'''

list_oil_by_vehicle = '''
    SELECT id, vehicle, odometer, `date`
    FROM vehicles.oil_change
    WHERE vehicle = %s
    ORDER BY `date`;
'''
