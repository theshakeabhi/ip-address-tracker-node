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

// added a middleware,with the use of this
//the coming data inside body of request gets
//parsed automatically.
app.use(express.json());
app.use(express.urlencoded());

const userIpRouter = require('./routes/userIp');
app.use('/user', userIpRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server Started'));
