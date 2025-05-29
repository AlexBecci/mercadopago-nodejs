import express from 'express';
import paymentsRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('src/public')));

app.use(paymentsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});