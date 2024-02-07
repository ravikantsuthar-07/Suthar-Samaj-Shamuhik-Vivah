import express from 'express';
import { createSliderController, getSliderController } from '../Controller/sliderController.js';
import { isAdmin } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

router.get('/get-slider', getSliderController);
router.get('/create-slider', isAdmin, formidable(), createSliderController);


export default router;