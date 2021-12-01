const handler = async (event) => {
  const { createMollieClient } = require("@mollie/api-client");

  const API_SECRET = process.env.API_SECRET;

  const mollieClient = createMollieClient({
    apiKey: API_SECRET,
  });

  const payment = await mollieClient.payments.create({
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    description: "ABC Membership",
    redirectUrl: "https://www.asianborrelclub.nl/purchase-success",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      link: payment._links.checkout.href,
      id: payment.id,
    }),
  };
};

module.exports = { handler };
