const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_LIVE);

async function StripeCheckoutSession(req, res) {
    const { item } = req.body;

    const redirectURL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://famous-payment-portal.vercel.app';

    const transformedItem = {
        price_data: {
            currency: 'inr',
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        description: item.description,
        quantity: item.quantity,
    };

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '?status=success',
        cancel_url: redirectURL + '?status=cancel',
    });

    res.json({ id: session.id });
}

export default StripeCheckoutSession;