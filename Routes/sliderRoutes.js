import express from 'express';
import { 
    createSliderController,
    deleteSliderController,
    getAdminSliderController,
    getSingleSliderController,
    getSliderController,
    getSliderLastController,
    updateSliderController,
    updateStatusSliderController
} from '../Controller/sliderController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();


const upload = multer({
    limits: {
        fileSize: 1000000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


router.get('/get-slider', getSliderController);
router.get('/get-single-slider/:id', getSingleSliderController);
router.get('/get-admin-slider', requireSignIn, isAdmin, getAdminSliderController);
router.put('/update-status-slider/:id', requireSignIn, isAdmin, updateStatusSliderController);
router.put('/update-slider/:id', requireSignIn, isAdmin, upload.single('img'), updateSliderController);
router.delete('/delete-slider/:id', requireSignIn, isAdmin, deleteSliderController);
router.post('/create-slider', requireSignIn, isAdmin, upload.single('img'), createSliderController);
router.get('/get-slider-last', getSliderLastController)


export default router;