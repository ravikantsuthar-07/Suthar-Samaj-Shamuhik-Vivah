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


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/client/src/img/sliders/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/get-slider', getSliderController);
router.get('/get-single-slider/:id', getSingleSliderController);
router.get('/get-slider-last', getSliderLastController);
router.get('/get-admin-slider', requireSignIn, isAdmin, getAdminSliderController);
router.post('/create-slider', requireSignIn, isAdmin, upload.single('img'), createSliderController);
router.put('/update-slider/:id', requireSignIn, isAdmin, upload.single('img'), updateSliderController);
router.put('/update-status-slider/:id', requireSignIn, isAdmin, updateStatusSliderController);
router.delete('/delete-slider/:id', requireSignIn, isAdmin, deleteSliderController);


export default router;