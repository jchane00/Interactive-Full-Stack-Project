const { Cars } = require('../models');

const cardata = [
  {
    make: 'Kia',
    model: 'Forte',
    year: '2018',
    price: 18999.00,
    mileage: 3402,
    condition: 'Excellent',
    vin_number: 'one'

},
{
    make: 'Honda',
    model: 'Accord',
    year: '2015',
    price: 16799.00,
    mileage: 75957,
    condition: 'Excellent',
    vin_number: 'two'

    
},
{
    make: 'Ford',
    model: 'Focus',
    year: '2017',
    price: 10959.00,
    mileage: 110306,
    condition: 'Good',
    vin_number: 'three'

},
{
    make: 'Ford',
    model: 'Mustang',
    year: '1974',
    price: 28999.00,
    mileage: 105089,
    condition: 'Excellent',
    vin_number: 'four'

},
{
    make: 'Nissan',
    model: 'Sentra',
    year: '2016',
    price: 13469.00,
    mileage: 23402,
    condition: 'Fair',
    vin_number: 'five'

},
{
    make: 'Toyota',
    model: 'Corolla',
    year: '2019',
    price: 16599.00,
    mileage: 8764,
    condition: 'Excellent',
    vin_number: 'six'

},
{
    make: 'Nissan',
    model: 'Versa',
    year: '2011',
    price: 9599.00,
    mileage: 134087,
    condition: 'Fair',
    vin_number: 'seven'

},
{
    make: 'Ford',
    model: 'Fusion',
    year: '2017',
    price: 16995.00,
    mileage: 55087,
    condition: 'Good',
    vin_number: 'eight'

},
{
    make: 'Kia',
    model: 'Forte',
    year: '2015',
    price: 18000.00,
    mileage: 3402,
    condition: 'Excellent',
    vin_number: 'nine'

},
{
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: '2019',
    price: 25895.00,
    mileage: 45081,
    condition: 'Excellent',
    vin_number: 'ten'

},
{
    make: 'Mazda',
    model: 'Mazda3',
    year: '2014',
    price: 16895.00,
    mileage: 103482,
    condition: 'Good',
    vin_number: 'eleven'

},
{
    make: 'Subaru',
    model: 'Impreza',
    year: '2013',
    price: 11959.00,
    mileage: 165923,
    condition: 'Fair',
    vin_number: 'twelve'

},

];

const seedCars = () => Cars.bulkCreate(cardata);

module.exports = seedCars;
