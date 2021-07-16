const express = require('express');
const router = express.Router();
const UserIp = require('../models/userIp');

router.get('/', async (req, res) => {
	try {
		const userIps = await UserIp.find();
		res.status(200).json(userIps);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post('/userip', async (req, res) => {
	const userIp = new UserIp({
		userId: req.body.userId,
		name: req.body.name ? req.body.name : '',
		ipAddress: req.body.ip,
		country: req.body.country,
		region: req.body.region,
		timezone: req.body.timezone,
		isp: req.body.isp,
	});
	try {
		const newUserIp = await userIp.save();
		res.status(200).json(newUserIp);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
