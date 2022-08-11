const User = require('./Employee');
const Cars = require('./Cars');

User.hasMany(Cars, {
  foreignKey: 'car_id',
});

Cars.belongsTo(User, {
  foreignKey: 'car_id',
});

module.exports = { Cars };
