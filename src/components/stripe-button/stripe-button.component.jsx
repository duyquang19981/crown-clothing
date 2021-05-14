import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Iqwk1ADdT4SuBTkfQJBVwrsoV6ap8dGgrFfcsoprH9n7yTTHgWO93Pjlq9aUpPHf9jVgg7gFhP4q8Vunvgp75Ra00Z7zNEgdU';

  const onToken = (token) => {
    console.log('token :>> ', token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
