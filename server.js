require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected'));

app.use(cors({ origin: '*' }));

const userIpRouter = require('./routes/userIp');
app.use('/userip', userIpRouter);

app.listen(process.env.PORT, () => console.log('Server Started'));
