const { User } = require('../models');

const userdata = [
  {
    name: "Sal",
    employee_id: "01",
    password: "password1234"
  }
  {
    name: "Mark",
    employee_id: "02",
    password: "password1234"
  }
  {
    name: "John",
    employee_id: "03",
    password: "password1234"
  }
  {
    name: "Tony",
    employee_id: "04",
    password: "password1234"
  }
  {
    name: "Sarah",
    employee_id: "05",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;