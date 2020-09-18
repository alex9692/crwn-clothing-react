import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const apiKey =
    "pk_test_51HSf1UJYuS5G8Nht7sWDxFA2zSsK2VyfLHYyTFthQqKZFrjLebQ7IYQPD8VvFkTBnpj5tD4nwIS1tKBhLgZEtaKy00GrzKUeY9";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={apiKey}
    />
  );
};

export default stripeCheckoutButton;
