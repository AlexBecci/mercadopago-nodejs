import express from 'express';
import paymentsRoutes from './routes/payment.routes.js'
import { PORT } from './config.js';
import morgan from 'morgan'

const app = express();
app.use(morgan('dev'))

app.use(paymentsRoutes)

app.listen(PORT)

console.log('server on port', PORT);

