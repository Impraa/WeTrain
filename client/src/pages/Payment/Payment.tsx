import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { stripePromise } from "../../utils/stripePromise";

const Payment = () => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: import.meta.env.VITE_STRIPE_SECRET_KEY,
      }}
    >
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
