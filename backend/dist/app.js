"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// Middleware CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
// Routing
app.use('/api/lps', index_1.default);
exports.default = app;