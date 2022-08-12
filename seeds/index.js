const sequelize = require('../config/connection');
const seedCars = require('./carData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCars();

  //await seedPaintings();

  process.exit(0);
};

seedAll();
