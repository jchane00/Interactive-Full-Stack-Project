const { Cars } = require('../models');

const cardata = [
{
    filename: '01-Honda-Accord.jpeg',
    make: 'Honda',
    model: 'Accord',
    year: '2015',
    price: 18999.00,
    mileage: 3402,
    condition: 'Excellent'
},
{
    filename: '02-Kia-Forte.jpeg',
    make: 'Kia',
    model: 'Forte',
    year: '2018',
    price: 16799.00,
    mileage: 75957,
    condition: 'Excellent'
},
{
    filename: '03-Nissan-Sentra.jpeg',
    make: 'Nissan',
    model: 'Sentra',
    year: '2016',
    price: 13469.00,
    mileage: 23402,
    condition: 'Fair'
},
{
    filename: '04-Ford-Focus.jpeg',
    make: 'Ford',
    model: 'Focus',
    year: '2017',
    price: 10959.00,
    mileage: 110306,
    condition: 'Good'
},
{
    filename: '05-Ford-Mustang.jpeg',
    make: 'Ford',
    model: 'Mustang',
    year: '1974',
    price: 28999.00,
    mileage: 105089,
    condition: 'Excellent'
},
{
    filename: '06-Mercedes-Benz.jpeg',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: '2019',
    price: 25895.00,
    mileage: 45081,
    condition: 'Excellent'
},
{
    filename: '07-Ford-Fusion.jpeg',
    make: 'Ford',
    model: 'Fusion',
    year: '2017',
    price: 10995.00,
    mileage: 45086,
    condition: 'Excellent'
},
{
    filename: '08-Toyota-Corolla.jpeg',
    make: 'Toyota',
    model: 'Corolla',
    year: '2019',
    price: 16599.00,
    mileage: 8764,
    condition: 'Excellent'
},
{
    filename: '09-Nissan-Versa.jpeg',
    make: 'Nissan',
    model: 'Versa',
    year: '2011',
    price: 9599.00,
    mileage: 134087,
    condition: 'Fair'
},
{
    filename: '10-Mazda-3.jpeg',
    make: 'Mazda',
    model: 'Mazda3',
    year: '2014',
    price: 16895.00,
    mileage: 103482,
    condition: 'Good',
},
{
    filename: '11-Subaru-Impreza.jpeg',
    make: 'Subaru',
    model: 'Impreza',
    year: '2013',
    price: 11959.00,
    mileage: 165923,
    condition: 'Fair',
},

];

const seedCars = () => Cars.bulkCreate(cardata);

module.exports = seedCars;
