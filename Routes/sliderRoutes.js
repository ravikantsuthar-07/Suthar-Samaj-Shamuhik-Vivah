import express from 'express';
import { createSliderController, getSliderController, getSliderLastController } from '../Controller/sliderController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();


const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


router.get('/get-slider', getSliderController);
router.post('/create-slider', requireSignIn, isAdmin, upload.single('img'), createSliderController);
router.get('/get-slider-last', getSliderLastController)


export default router;