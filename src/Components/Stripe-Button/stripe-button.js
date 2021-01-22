import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForSale = price * 100;
    const publishableKey = "pk_test_51ICU0EDZuaatzxYEVq0BsYjp40H0xIJLSmfe1yIXKDIYYdVHImQIdSWlFI4zupUfITTMWfsvoWSb34JyLy9x9Eu300Qd0G7BTo";

    const onToken = token =>{
        console.log(token);
        alert('payement successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="CROWN Clothing LTD."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForSale}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;