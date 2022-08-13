const router = require('express').Router();
const { Cars } = require('../models');
const User = require('../models/User');

// GET all cars for homepage
router.get('/', async (req, res) => {
  try {
    const dbcarData = await Cars.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'employee_id'],
        },
      ],
    });

    const cars = dbcarData.map((cars) =>
      cars.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      cars,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET 
router.get('/cars/:id', async (req, res) => {
  try {
    const dbcarData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'id',
            ,
          ],
        },
      ],
    });

    const cars = dbcarData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'car' template
    res.render('cars', { cars, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one car
router.get('/users/:id', async (req, res) => {
  try {
    const dbuserData = await User.findByPk(req.params.id);

    const user = dbuserData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('user', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
