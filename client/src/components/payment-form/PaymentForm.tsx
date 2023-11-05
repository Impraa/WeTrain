import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./PaymentForm.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessingPayment, setIsProcessingPayment] =
    useState<boolean>(false);

  const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);
  };

  return (
    <div className="payment-form">
      <form onSubmit={paymentHandler}>
        <CardElement />
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
