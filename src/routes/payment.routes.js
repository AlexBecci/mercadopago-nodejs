// filepath: c:\Users\alex.becci\Desktop\PROYECTOS FULL\mercadopago-nodejs\src\routes\payment.routes.js
import { Router } from 'express';
import { createOrder, receiveWebhook } from '../controller/payment.controller.js';

const router = Router();

router.post('/create-order', createOrder);

router.get('/success', (req, res) => {
    res.send('<h1>Payment Successful</h1><p>Your payment has been processed successfully.</p>');
});

router.get('/failure', (req, res) => {
    res.send('<h1>Payment Failed</h1><p>There was an issue processing your payment. Please try again.</p>');
});

router.get('/pending', (req, res) => {
    res.send('<h1>Payment Pending</h1><p>Your payment is currently being processed. Please check back later.</p>');
});

router.post('/webhook', receiveWebhook);

export default router;