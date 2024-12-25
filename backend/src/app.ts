import express from 'express';
import cors from 'cors';
import uploadRoutes from './routes/index';

const app = express();

// Middleware CORS
app.use(cors({
    origin: 'http://localhost:3000', // Frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Routing
app.use('/api/lps', uploadRoutes);

export default app;