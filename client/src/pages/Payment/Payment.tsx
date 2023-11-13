import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { stripePromise } from "../../utils/stripePromise";
import { Payment as PaymentInterface } from "../../utils/Interfaces/components/PropsInterfaces";

const Payment: React.FC<PaymentInterface> = ({ client_secret }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: client_secret,
      }}
    >
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
