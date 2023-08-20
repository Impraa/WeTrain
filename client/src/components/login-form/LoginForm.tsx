import { useState } from "react";
import IconEye from "../../assets/IconEye";
import "./LoginForm.scss";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import CustomButton from "../custom-button/CustomButton";
import { Link } from "react-router-dom";

function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <div className="login-form">
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
          />
          {isPasswordVisible ? (
            <IconEye
              onClick={() => {
                setIsPasswordVisible(false);
              }}
            />
          ) : (
            <IconEyeInvisible
              onClick={() => {
                setIsPasswordVisible(true);
              }}
            />
          )}
        </div>
        <Link className="forgot-password-link" to={"/forgot-password"}>
          You forgot your password?
        </Link>
      </div>
      <CustomButton
        onClick={() => {
          console.log("mjau");
        }}
        type="normal"
      >
        Log in
      </CustomButton>
    </div>
  );
}

export default LoginForm;
