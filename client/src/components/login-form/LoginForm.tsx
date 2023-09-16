import { useEffect, useState } from "react";
import IconEye from "../../assets/IconEye";
import "./LoginForm.scss";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import CustomButton from "../custom-button/CustomButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserLogin } from "../../../../types/User";
import { loginUserAsync } from "../../redux/user/UserAction";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserIsLoading,
  selectUserError,
} from "../../redux/user/UserSelector";
import { Message } from "../message/Message";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);
  const serverError = useSelector(selectUserError);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (user) {
      navigate(state?.path || "/");
    }
  }, [user]);

  useEffect(() => {
    setError(serverError);
  }, [serverError]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData: UserLogin) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    loginUserAsync(dispatch, formData);
  };

  return (
    <div className="login-form">
      {error && <Message type="error">{error}</Message>}
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.email}
          id="email"
          name="email"
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            onChange={handleChange}
            value={formData.password}
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
          handleSubmit();
        }}
        disable={isLoading ? true : false}
        type="normal"
      >
        Log in
      </CustomButton>
    </div>
  );
}

export default LoginForm;
