const handler = async (event) => {
  const { createMollieClient } = require("@mollie/api-client");
  
  const API_SECRET = process.env.API_TEST;

  const mollieClient = createMollieClient({
    apiKey: API_SECRET,
  });

  (async () => {
    try {
      const payment = await mollieClient.payments.get(event.body.id);

      console.log(event.body);
      // Check if payment is paid
      const isPaid = payment.isPaid();

      if (isPaid) {
        console.log("payment paid");
      } else {
        console.log(
          `Payment is not paid, but instead it is: ${payment.status}`
        );
      }
    } catch (error) {
      console.warn(error);
    }
  })();
};

module.exports = { handler };
