import express from 'express';
import { 
    createKarmawatiController,
    createWhomKarmawatiController,
    getAdminKarmawatiController,
    getAdminYearKarmawatiController,
    getYearAdminKarmawatiController,
    getYearByAdminWhomKarmawatiController,
    getYearByKarmawatiController,
    getYearByWhomKarmawatiController,
    getYearKarmawatiController,
    updateStatusGiveKarmawatiController,
    updateStatusKarmawatiController
} from '../Controller/karmawatiController.js';
import multer from 'multer';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/assets/karmawati/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/get-year', getYearKarmawatiController);
router.get('/get-by-year/:year', getYearByKarmawatiController);
router.post('/create', upload.single('img'), createKarmawatiController);
router.get('/admin-get/:year', requireSignIn, isAdmin, getAdminKarmawatiController);
router.get('/admin-get-year', requireSignIn, isAdmin, getAdminYearKarmawatiController);
router.put('/update-status/:id', requireSignIn, isAdmin, updateStatusKarmawatiController);
router.get('/get-by-year-whom/:year',  getYearByWhomKarmawatiController);
router.get('/get-admin-year', requireSignIn, isAdmin, getYearAdminKarmawatiController);
router.get('/get-by-year-admin-whom/:year', requireSignIn, isAdmin, getYearByAdminWhomKarmawatiController);
router.post('/create-whose', requireSignIn, isAdmin, upload.single('img'), createWhomKarmawatiController);
router.put('/update-status-give/:id', requireSignIn, isAdmin, updateStatusGiveKarmawatiController);




export default router;