import express from "express";
import {
    createGiftController,
    createWeddingController,
    deleteGiftController,
    deleteWeddingController,
    getAllWeddingController,
    getGiftController,
    getSingleGiftController,
    getSingleWeddingController,
    getWeddingYearController,
    updateGiftController,
    updateWeddingController,
} from "../Controller/weddingController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import multer from 'multer';

const router = express.Router();




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'Photo' ) {
            cb(null, process.cwd() + '/assets/wedding/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.get('/gettAllWedding/:year', getAllWeddingController);
router.get('/gettSingleWedding/:id', getSingleWeddingController);
router.get('/get-Wedding-year', getWeddingYearController);

router.post('/createWedding', requireSignIn, isAdmin, upload.array('Photo', 2), createWeddingController);
router.put('/updateWedding/:id', requireSignIn, isAdmin, upload.array('Photo', 2), updateWeddingController);
router.post('/deleteWedding/:id', requireSignIn, isAdmin, deleteWeddingController);

router.get('/getSingleGift/:id', getSingleGiftController);
router.get('/gifts/:year', getGiftController);
router.post('/createGift', requireSignIn, isAdmin, createGiftController);
router.put('/updateGift/:id', requireSignIn, isAdmin, updateGiftController);
router.delete('/deleteGift/:id', requireSignIn, isAdmin, deleteGiftController);


export default router;