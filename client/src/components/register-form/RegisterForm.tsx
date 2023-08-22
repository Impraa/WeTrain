import { useState } from "react";
import IconEye from "../../assets/IconEye";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import "./RegisterForm.scss";
import CustomButton from "../custom-button/CustomButton";

export const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <div className="register-form">
      <div className="fname">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="fname" />
      </div>
      <div className="lname">
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lname" />
      </div>
      <div className="username">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
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
      </div>
      <div className="password">
        <label htmlFor="cpassword">Confirm Password</label>
        <div className="password-input">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="cpassword"
            name="cpassword"
          />
        </div>
      </div>
      <CustomButton
        onClick={() => {
          console.log("mjau");
        }}
        type="normal"
      >
        Register now!
      </CustomButton>
    </div>
  );
};
