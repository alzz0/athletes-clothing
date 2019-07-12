import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeButton =({price})=>{
    const priceForStripe=price*100;
    const punlishableKey="pk_test_G5od00qjsJQj3oz7VrVZetfy00SSXZa2bX"
    const onToken=token=>{
        console.log(token)
        alert("Payment Successful")}
  
    return(
 <StripeCheckout
    label="Pay Now"
     name="Athletes Clothing"
      billingAddress
       shippingAddress 
       image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ${price}`}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={punlishableKey}
        />
    )
}

export default StripeButton