const mongoose = require('mongoose');

const userIpSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	ipAddress: {
		type: String,
		require: true,
	},
	country: {
		type: String,
		require: true,
	},
	region: {
		type: String,
		require: true,
	},
	timezone: {
		type: String,
		require: true,
	},
	isp: {
		type: String,
		require: true,
	},
	name: {
		type: String,
	},
});

module.exports = mongoose.model('UserIp', userIpSchema);
