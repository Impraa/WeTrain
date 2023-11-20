import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { stripePromise } from "../../utils/stripePromise";

const Payment = () => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: window.sessionStorage.getItem("client_secret") as string,
      }}
    >
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
