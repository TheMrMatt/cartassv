const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const connectDB = require('./config/db');

const cartasRoutes = require('./routes/cartas');


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/carta', cartasRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
