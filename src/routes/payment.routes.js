import { Router } from 'express'

const router = Router();

router.get('/create-order', (req, res) => {
    res.send('craeting order');
})

router.get('/success', (req, res) => {
    res.send('success order');
})

router.get('/webhook', (req, res) => {
    res.send('webhook');
})


export default router