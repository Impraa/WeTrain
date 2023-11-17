import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./PaymentForm.scss";
import { Message } from "../message/Message";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigation = useNavigate();

  const [paymentError, setPaymentError] = useState<string>("");

  const [isProcessingPayment, setIsProcessingPayment] =
    useState<boolean>(false);

  const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const cardDetails = elements.getElement(PaymentElement);

    if (!cardDetails) return;

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    setIsProcessingPayment(false);

    if (error) {
      setPaymentError(error as unknown as string);
    } else {
      return navigation("/");
    }
  };

  return (
    <div className="payment-form">
      {paymentError && <Message type="error">{paymentError}</Message>}
      <h2>Payment form</h2>
      <form onSubmit={paymentHandler}>
        <PaymentElement />
        <CustomButton
          buttonType="submit"
          onClick={() => {}}
          type="inverted"
          disable={isProcessingPayment}
        >
          Pay now
        </CustomButton>
      </form>
    </div>
  );
};

export default PaymentForm;
