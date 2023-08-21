import CustomButton from "../../components/custom-button/CustomButton";
import "./ForgotPassword.scss";
function ForgotPassword() {
  return (
    <div className="forgot-password">
      <div className="content">
        <h2>Have you forgotten your password?</h2>
        <h3>
          No problem, provide us your email and we will allow you to reset your
          password!
        </h3>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <CustomButton type="success" onClick={() => {}}>
          Send me a reset link
        </CustomButton>
      </div>
    </div>
  );
}

export default ForgotPassword;
