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
});

module.exports = mongoose.model('UserIp', userIpSchema);
