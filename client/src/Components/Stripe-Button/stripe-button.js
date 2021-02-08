import React from 'react';
import axios from '../../../../../http--01-starting-setup/public/node_modules/axios';
import StripeCheckout from '../../../../../http--01-starting-setup/public/node_modules/react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForSale = price * 100;
    const publishableKey = "pk_test_51ICU0EDZuaatzxYEVq0BsYjp40H0xIJLSmfe1yIXKDIYYdVHImQIdSWlFI4zupUfITTMWfsvoWSb34JyLy9x9Eu300Qd0G7BTo";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount: priceForSale,
                token
            }
        }).then((response) => {
            alert('payement successful')
        }).catch(error => {
            console.log('Payement Error', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card.')
        })
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