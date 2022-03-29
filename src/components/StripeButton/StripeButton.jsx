import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Kb6HbJgmUwNEWNVdBN8fRj4XS6vY1aVONZIr0QCeVvVxWqAy89ZODwkTc2NMb6ww8a3GzY4KyBqis8XteAUDZAm00dsl0Igg3';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <div data-testid="test-id-button-checkout">
      <StripeCheckout
        label="Pay Now"
        name="Lali Company"
        billingAddress
        shippingAddress
        image="https://image.shutterstock.com/image-vector/money-bag-flat-illustration-dollars-260nw-1927192892.jpg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};
