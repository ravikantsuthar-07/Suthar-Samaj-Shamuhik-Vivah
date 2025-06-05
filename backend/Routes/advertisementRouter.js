import express from 'express';
import { 
    createAdvertisementController,
    deleteAdvertisementController,
    getAdminAdvertisementController,
    getAdvertisementController,
    updateStatusAdvertisementController
} from '../Controller/advertisementController.js';
import multer from 'multer';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'Photo' ) {
            cb(null, process.cwd() + '/assets/advertisement/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/get', getAdvertisementController);
router.post('/create', requireSignIn, isAdmin, upload.single('Photo'), createAdvertisementController);
router.put('/update-status/:id', requireSignIn, isAdmin, updateStatusAdvertisementController);
router.post('/delete/:id', requireSignIn, isAdmin, deleteAdvertisementController);
router.get('/get-admin', requireSignIn, isAdmin, getAdminAdvertisementController);


export default router;