import { useState, useEffect } from 'react';
import { Axios } from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../images/logo.png'

const KEY = pk_test_51L2HXcJVDQ3leAciukLUzjEKualoUGeOtYivPgv3EPOeq2qa4Mo8JwUFqBIuidXQPxATe4kuXrsHzHkVlnx8iwGf00fvNm2E1m

function Pay() {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory()
    const onToken = (token)=>{
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = await Axios.post("http://localhost:3001/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 4000,
                });
                history.push("/success")
            } catch (error) {
                console.log(error)
            };
            stripeToken && makeRequest
        }
    }, [stripeToken, history]);

  return (
    <div
        style={{
            hight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        {stripeToken ? (<span>Processing. Please wait...</span>):(
        <StripeCheckout 
        name="Mundo de Papel" 
        image={logo}
        billingAddress
        shippingAddress
        description='Your total is $40'
        amount={4000}
        token={onToken}
        stripeKey={KEY}
        >
            <button
            style={{
                border: "none",
                width: "120",
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight:"600",
                cursor: "pointer",
            }}
            >
                Pay Now

            </button>
        </StripeCheckout>
        )}
    </div>
  )
}

export default Pay