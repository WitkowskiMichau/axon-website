"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multerMiddleware_1 = __importDefault(require("../middlewares/multerMiddleware"));
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
const router = express_1.default.Router();
router.post('/upload', multerMiddleware_1.default.single('file'), uploadController_1.default);
exports.default = router;
