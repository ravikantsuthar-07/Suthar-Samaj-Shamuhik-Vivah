import express from 'express';
import dotenv from 'dotenv';

import connection from './DB/connection.js';

import register from './Routes/registerRouter.js';
import Slider from './Routes/sliderRoutes.js'

// Environment Configuration
dotenv.config()

// Database Connect
connection();



const app = express();


app.use('/api/v1/rgister', register);
app.use('/api/v1/slider', Slider);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})