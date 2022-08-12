const { User } = require('../models');

const userdata = [
  {
    name: "Sal",
    employee_id: "sal@hotmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
