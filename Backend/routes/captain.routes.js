const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post(
	'/register',
	[
		body('fullname.firstname')
			.isLength({ min: 3 })
			.withMessage('First name must be at least 3 characters long'),
		body('email').isEmail().withMessage('Invalid Email'),
		body('password')
			.isLength({ min: 6 })
			.withMessage('Password must be at least 6 characters long'),
		body('vehicle.color').isLength({ min: 3 }).withMessage('Color is required'),
		body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate is required'),
		body('vehicle.capacity')
			.isInt({ min: 1 })
			.withMessage('Capacity is required'),
		body('vehicle.vehicleType')
			.isIn(['motorcycle', 'car', 'auto'])
			.withMessage('Vehicle type is required'),
	],
	captainController.registerCaptain
);

module.exports = router;
