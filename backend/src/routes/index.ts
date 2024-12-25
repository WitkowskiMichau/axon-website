import express from 'express';
import upload from "../middlewares/multerMiddleware";
import uploadFile from "../controllers/uploadController";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);

export default router;
