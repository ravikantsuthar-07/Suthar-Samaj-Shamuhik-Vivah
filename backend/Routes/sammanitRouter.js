import express from 'express';
import { 
    createSammanitController,
    getAdminSammanitController,
    getSammanitController,
    getYearSammanitController,
    updateStatusSammanitController
} from '../Controller/sammanitController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/assets/sammanit/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/get/:year', getSammanitController);
router.get('/get-year', getYearSammanitController);
router.get('/get-admin/:year', requireSignIn, isAdmin, getAdminSammanitController);
router.post('/create', upload.single('img'), createSammanitController);
router.put('/update-status/:id', requireSignIn, isAdmin, updateStatusSammanitController);

export default router;