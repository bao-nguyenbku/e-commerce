// import { useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import emailjs from '@emailjs/browser';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
// This values are the props in the UI
const style = { layout: 'vertical' };
const ButtonWrapper = ({ currency, total }) => {
  const [cookies, setCookie] = useCookies(['course-user']);
  // const items = useSelector(state => state.cart.items);

  const sendEmail = () => {
    emailjs
      .send(
        'service_vrdo8iw',
        'template_jr7tskj',
        {
          from_name: 'ConceptCourse Team',
          user_name: 'Vĩ',
          message: 'Cảm ơn bạn đã mua và sử dụng khóa học của chúng mình ',
          to_email: cookies['course-user'] ? cookies['course-user'].email : '',
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
            console.log(orderId);
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
