import IconEye from "../../assets/IconEye";
import "./LoginForm.scss";

function LoginForm() {
  return (
    <div className="login-form">
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input type="text" id="password" name="password" />
          <IconEye />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
