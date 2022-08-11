const { User } = require('../models');

const userdata = [
  {
    name: 'Honda Accord',
    car_id: 1,
    filename: '01-Honda-Accord.jpeg',
    vin: 'JXHVGWL4782637857',
  },
  {
    name: 'Kia Forte',
    car_id: 2,
    filename: '02-Kia-Forte.jpeg',
    vin: 'WLKVG678918372615',
  },
  {
    name: 'Nissan Sentra',
    car_id: 3,
    filename: '03-Nissan-Sentra.jpeg',
    vin: 'SJVNYHU7635246785',
  },
  {
    name: 'Ford Focus',
    car_id: 4,
    filename: '04-Ford-Focus.jpeg',
    vin: 'CHYUJNEHY76538267',
  },
  {
    name: 'Ford Mustang',
    car_id: 5,
    filename: '05-Ford-Mustang.jpeg',
    vin: 'JNEHYVKIJU7628910',
  },
  {
    name: 'Mercedes Benz C-Class',
    car_id: 6,
    filename: '06-Mercedes-Benz.jpeg',
    vin: 'CNHJEKIOL87365784',
  },
  {
    name: 'Ford Fusion',
    car_id: 7,
    filename: '07-Ford-Fusion.jpeg',
    vin: 'XBHNEJUIK87362578',
  },
  {
    name: 'Toyota Corolla',
    car_id: 8,
    filename: '08-Toyota-Corolla.jpeg',
    vin: 'NMUJEHUKLO9278576',
  },
  {
    name: 'Nissan Versa',
    car_id: 9,
    filename: '09-Nissan-Versa.jpeg',
    vin: 'YJKLIVUHR87362517',
  },
  {
    name: 'Mazda Mazda3',
    car_id: 10,
    filename: '10-Mazda-3.jpeg',
    vin: 'MILKOEKJU89016372',
  },
  {
    name: 'Subaru Impreza',
    car_id: 11,
    filename: '11-Subaru-Impreza.jpeg',
    vin: 'ZYUJKLIEOP8725167',
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
