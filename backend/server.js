const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddlware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome' });
});
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
