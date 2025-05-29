import { MercadoPagoConfig, Preference } from 'mercadopago';
import { HOST, MERCADOPAGO_API_KEY } from '../config.js';

const mp = new MercadoPagoConfig({
    accessToken: MERCADOPAGO_API_KEY,
});

export const createOrder = async (req, res) => {
    try {
        const preference = new Preference(mp);

        const result = await preference.create({
            body: {
                items: [
                    {
                        title: 'Laptop Lenovo LOREM',
                        unit_price: 500,
                        currency_id: 'ARS',
                        quantity: 1,
                    },
                ],
            },
            back_urls: {
                success: `${HOST}/success`,
                failure: `${HOST}/failure`,
                pending: `${HOST}/pending`
            },
            notification_url: "https://0116-190-111-216-148.ngrok-free.app/webhook",
            auto_run: 'approved'
        });

        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la orden');
    }
};

export const receiveWebhook = async (req, res) => {
    console.log('Método recibido:', req.method);
    console.log('📩 Webhook recibido con body:', JSON.stringify(req.body, null, 2));

    const payment = req.body;

    try {
        if (payment.type === 'payment') {
            const data = await mp.payment.findById(payment.data.id);
            console.log('🔍 Detalle del pago:', data);
        }
        res.sendStatus(204);
    } catch (error) {
        console.error('❌ Error en webhook:', error);
        res.status(500).json({ error: error.message });
    }
};
