const { Cars } = require('../models');

const cardata = [
{
    make: 'Honda',
    model: 'Accord',
    year: '2015'
},
{
    make: 'Kia',
    model: 'Forte',
    year: '2018'
},
{
    make: 'Nissan',
    model: 'Sentra',
    year: '2016'
},
{
    make: 'Ford',
    model: 'Focus',
    year: '2017'
},
{
    make: 'Ford',
    model: 'Mustang',
    year: '1974'
},
{
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: '2019'
},
{
    make: 'Ford',
    model: 'Fusion',
    year: '2017'
},
{
    make: 'Toyota',
    model: 'Corolla',
    year: '2019'
},
{
    make: 'Nissan',
    model: 'Versa',
    year: '2011'
},
{
    make: 'Mazda',
    model: 'Mazda3',
    year: '2014'
},
{
    make: 'Subaru',
    model: 'Impreza',
    year: '2013'
},

];

const seedCars = () => Cars.bulkCreate(cardata);

module.exports = seedCars;
