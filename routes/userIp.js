const express = require('express');
const router = express.Router();
const UserIp = require('../models/userIp');

router.get('/getuser', async (req, res) => {
	try {
		const userIps = await UserIp.find();
		res.status(200).json(userIps);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
