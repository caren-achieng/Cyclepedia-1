require('dotenv').config({path: './.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const { AppsSharp } = require('@mui/icons-material')
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Database connection
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//Error Handler (should be last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1 ))
})