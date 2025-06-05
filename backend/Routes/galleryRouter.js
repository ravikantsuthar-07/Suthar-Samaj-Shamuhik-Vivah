import express from 'express';
import { 
    createImageGalleryController,
    deleteGalleryImageController,
    getGalleryImageController,
    getGalleryYearController
} from '../Controller/galleryController.js';
import multer from 'multer';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'Photo' ) {
            cb(null, process.cwd() + '/assets/gallery/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.get('/get-images/:year', getGalleryImageController);
router.get('/get-year', getGalleryYearController);
router.post('/create', requireSignIn, isAdmin, upload.array('Photo', 20), createImageGalleryController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteGalleryImageController);


export default router;