const User = require('./User');
const Cars = require('./Cars');

User.hasMany(Cars, {
  foreignKey: 'car_id',
});

Cars.belongsTo(User, {
  foreignKey: 'car_id',
});

module.exports = { Cars };
