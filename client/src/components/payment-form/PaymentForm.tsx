import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./PaymentForm.scss";
import { Message } from "../message/Message";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { createUserMembershipAsync } from "../../redux/membership/MembershipAction";
import { selectMembershipError } from "../../redux/membership/MembershipSelector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigation = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)!;
  const membershipError = useSelector(selectMembershipError);

  const [paymentError, setPaymentError] = useState<string>("");

  const [isProcessingPayment, setIsProcessingPayment] =
    useState<boolean>(false);

  const [paymentSuccess, setPaymentSuccess] = useState<string>("");

  useEffect(() => {
    setPaymentError("");
    setPaymentSuccess("");
  }, [location.pathname]);

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
      createUserMembershipAsync(dispatch, user.id);

      if (membershipError) {
        setPaymentError(membershipError);
      } else {
        setPaymentSuccess(
          "Payment was successfully you will be redirected to the homepage shortly"
        );
        window.sessionStorage.removeItem("client_secret");
        setTimeout(() => {
          return navigation("/");
        }, 3000);
      }
    }
  };

  return (
    <div className="payment-form">
      {paymentSuccess && <Message type="success">{paymentSuccess}</Message>}
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
