import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JhXWYSBJSSwt7gNbVb6rssFFdQSnQxLrBEeEnTyCgF81KS3IAQZzji1pAkhaJnCdKRseJXf9eMa9qblsCY4OxZ400gWEzkxvF";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

  return (
      <StripeCheckout
        label = "Pay Now"
        name = "E-commerce"
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is ${price}`}
        amount = {priceForStripe}
        panelLabel="Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
      />
  )
};

export default StripeCheckoutButton;