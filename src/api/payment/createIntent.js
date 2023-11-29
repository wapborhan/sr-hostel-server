const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createIntent = async (req, res) => {
  const { subscription } = req.body;

  if (typeof subscription === "number") {
    const amount = parseInt(subscription * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
};

module.exports = createIntent;
