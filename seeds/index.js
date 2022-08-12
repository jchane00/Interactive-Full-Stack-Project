const sequelize = require('../config/connection');
const seedCars = require('./carData');
<<<<<<< HEAD
=======
const seedUsers = require('./userData');
>>>>>>> 3f0b5f8b3ef3a8a341daaf34b654f2d6b6c63076

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCars();

<<<<<<< HEAD
  //await seedPaintings();
=======
  await seedUsers();
>>>>>>> 3f0b5f8b3ef3a8a341daaf34b654f2d6b6c63076

  process.exit(0);
};

seedAll();
