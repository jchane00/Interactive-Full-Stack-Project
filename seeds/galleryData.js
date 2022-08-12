const { Gallery } = require('../models/Gallery')

const gallerydata = [
    {
      name: 'Honda Accord',
      car_id: 1,
      vin: 'JXHVGWL4782637857',
    },
    {
      name: 'Kia Forte',
      car_id: 2,
      vin: 'WLKVG678918372615',
    },
    {
      name: 'Nissan Sentra',
      car_id: 3,
      vin: 'SJVNYHU7635246785',
    },
    {
      name: 'Ford Focus',
      car_id: 4,
      vin: 'CHYUJNEHY76538267',
    },
    {
      name: 'Ford Mustang',
      car_id: 5,
      vin: 'JNEHYVKIJU7628910',
    },
    {
      name: 'Mercedes Benz C-Class',
      car_id: 6,
      vin: 'CNHJEKIOL87365784',
    },
    {
      name: 'Ford Fusion',
      car_id: 7,
      vin: 'XBHNEJUIK87362578',
    },
    {
      name: 'Toyota Corolla',
      car_id: 8,
      vin: 'NMUJEHUKLO9278576',
    },
    {
      name: 'Nissan Versa',
      car_id: 9,
      vin: 'YJKLIVUHR87362517',
    },
    {
      name: 'Mazda Mazda3',
      car_id: 10,
      vin: 'MILKOEKJU89016372',
    },
    {
      name: 'Subaru Impreza',
      car_id: 11,
      vin: 'ZYUJKLIEOP8725167',
    }
  ];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;