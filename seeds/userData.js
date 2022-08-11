const { User } = require('../models');

const userdata = [
  {
    name: 'Honda Accord',
    car_id: 1,
    filename: '01-Honda-Accord.jpeg',
    price: 18999.00,
    mileage: 3402,
    condition: 'Excellent',
  },
  {
    name: 'Kia Forte',
    car_id: 2,
    filename: '02-Kia-Forte.jpeg',
    price: 16799.00,
    mileage: 75957,
    condition: 'Excellent',
  },
  {
    name: 'Nissan Sentra',
    car_id: 3,
    filename: '03-Nissan-Sentra.jpeg',
    price: 13469.00,
    mileage: 23402,
    condition: 'Fair',
  },
  {
    name: 'Ford Focus',
    car_id: 4,
    filename: '04-Ford-Focus.jpeg',
    price: 10959.00,
    mileage: 110306,
    condition: 'Good',
  },
  {
    name: 'Ford Mustang',
    car_id: 5,
    filename: '05-Ford-Mustang.jpeg',
    price: 28999.00,
    mileage: 105089,
    condition: 'Excellent',
  },
  {
    name: 'Mercedes Benz C-Class',
    car_id: 6,
    filename: '06-Mercedes-Benz.jpeg',
    price: 25895.00,
    mileage: 45081,
    condition: 'Excellent',
  },
  {
    name: 'Ford Fusion',
    car_id: 7,
    filename: '07-Ford-Fusion.jpeg',
    price: 10995.00,
    mileage: 45086,
    condition: 'Excellent'
  },
  {
    name: 'Toyota Corolla',
    car_id: 8,
    filename: '08-Toyota-Corolla.jpeg',
    price: 16599.00,
    mileage: 8764,
    condition: 'Excellent'
  },
  {
    name: 'Nissan Versa',
    car_id: 9,
    filename: '09-Nissan-Versa.jpeg',
    price: 9599.00,
    mileage: 134087,
    condition: 'Fair',
  },
  {
    name: 'Mazda Mazda3',
    car_id: 10,
    filename: '10-Mazda-3.jpeg',
    price: 16895.00,
    mileage: 103482,
    condition: 'Good',
  },
  {
    name: 'Subaru Impreza',
    car_id: 11,
    filename: '11-Subaru-Impreza.jpeg',
    price: 11959.00,
    mileage: 165923,
    condition: 'Fair',
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
