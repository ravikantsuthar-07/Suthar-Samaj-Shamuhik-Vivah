import express from 'express';
import { 
    createNewsController,
    deleteNewsController,
    getAdminNewsContoller,
    getNewsController, 
    getSingleNewsController, 
    updateNewsController,
    updateStatusNewsController
} from '../Controller/newsController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/client/src/img/news/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/get-news', getNewsController);
router.get('/get-single-news/:id', getSingleNewsController);
router.get('/get-admin-news', requireSignIn, isAdmin, getAdminNewsContoller);
router.post('/create-news', requireSignIn, isAdmin, upload.single('img'), createNewsController);
router.put('/update-news/:id', requireSignIn, isAdmin,  upload.single('img'), updateNewsController);
router.delete('/delete-news/:id', requireSignIn, isAdmin, deleteNewsController);
router.put('/update-status/:id', requireSignIn, isAdmin, updateStatusNewsController);

export default router;