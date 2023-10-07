import { useState } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import "./ForgotPassword.scss";
import { Message } from "../../components/message/Message";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNewPasswordError,
  selectNewPasswordIsLoading,
} from "../../redux/user/UserSelector";
import { sendResetUserPasswordAsync } from "../../redux/user/UserAction";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newPasswordIsLoading = useSelector(selectNewPasswordIsLoading);
  const newPasswordError = useSelector(selectNewPasswordError);

  const submitEmail = () => {
    const homepage = sendResetUserPasswordAsync(dispatch, email);
    homepage.then((response) => navigate(response!));
  };

  return (
    <div className="forgot-password">
      <div className="content">
        {newPasswordError && <Message type="error">{newPasswordError}</Message>}
        <h2>Have you forgotten your password?</h2>
        <h3>
          No problem, provide us your email and we will allow you to reset your
          password!
        </h3>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <CustomButton
          type="normal"
          onClick={() => {
            submitEmail();
          }}
          disable={newPasswordIsLoading ? true : false}
        >
          Send me a reset link
        </CustomButton>
      </div>
    </div>
  );
}

export default ForgotPassword;
