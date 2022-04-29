import { useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import emailjs from '@emailjs/browser';

// This values are the props in the UI
const style = { layout: 'vertical' };
const ButtonWrapper = ({ currency, total }) => {
  const sendEmail = () => {
    emailjs
      .send(
        'service_vrdo8iw',
        'template_jr7tskj',
        {
          from_name: 'ConceptCourse Team',
          user_name: 'Vĩ',
          message: 'Cảm ơn bạn đã mua và sử dụng khóa học của chúng mình ',
          to_email: 'exstarquang@gmail.com',
        },
        '4a72-CqJ445qQRxO9'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <PayPalButtons
      style={style}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: total,
                },
              },
            ],
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(function () {
          // Your code here after capture the order
          console.log(' Payment Done');
          sendEmail();
        });
      }}
    />
  );
};

export default ButtonWrapper;

// import {
//     PayPalScriptProvider,
// } from "@paypal/react-paypal-js";
// const currency = "USD";

/* <div stylessss={{ maxWidth: '750px', minHeight: '200px' }}>
<PayPalScriptProvider
  options={{
    'client-id': 'test',
    components: 'buttons',
    currency: 'USD',
  }}
>
  <ButtonWrapper currency={currency} showSpinner={false} />
</PayPalScriptProvider>
</div>
</div> */
