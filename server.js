import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


import register from './Routes/registerRouter.js';
import Slider from './Routes/sliderRoutes.js'
import wedding from "./Routes/weddingRoutes.js";
import team from './Routes/teamRouters.js';
import contact from './Routes/contactRouter.js';
import news from './Routes/newsRouter.js';
import gallery from './Routes/galleryRouter.js';
import Sutradhar from './Routes/sutradharRouter.js';
import sammanit from './Routes/sammanitRouter.js';
import karmawati from './Routes/karmawatiRouter.js';

// Environment Configuration
dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);


app.use('/api/v1/rgister', register);
app.use('/api/v1/slider', Slider);
app.use('/api/v1/wedding', wedding);
app.use('/api/v1/sammanit', sammanit);
app.use('/api/v1/karmawati', karmawati);
app.use('/api/v1/team', team);
app.use('/api/v1/contact', contact);
app.use('/api/v1/news', news);
app.use('/api/v1/gallery', gallery);
app.use('/api/v1/sutradhar', Sutradhar);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});