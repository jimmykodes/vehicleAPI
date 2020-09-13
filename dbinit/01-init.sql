create table vehicles.fuel
(
    id         int not null auto_increment primary key,
    vehicle    varchar(255),
    odometer   int not null,
    tripometer decimal(8, 2),
    oil_level  decimal(8, 2),
    gallons    decimal(8, 2),
    dollars    decimal(8, 2),
    date       date
);

create table vehicles.oil_change
(
    id       int not null auto_increment primary key,
    vehicle  varchar(255),
    odometer int not null,
    date     date
);