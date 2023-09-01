import { useEffect, useState } from "react";
import IconEye from "../../assets/IconEye";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import "./RegisterForm.scss";
import CustomButton from "../custom-button/CustomButton";
import { UserRegister } from "../../../../types/User";
import { setUserAsync } from "../../redux/user/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserError,
  selectUserIsLoading,
} from "../../redux/user/UserSelector";
import { Message } from "../message/Message";
import { selectCurrentUser } from "../../redux/user/UserSelector";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);
  const serverError = useSelector(selectUserError);

  const [error, setError] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    setError(serverError);
  }, [serverError]);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserRegister>({
    fname: "",
    lname: "",
    username: "",
    email: "",
    birthday: new Date("1969-01-26"),
    gender: "male",
    password: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData: UserRegister) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== confirmPass) {
      window.scrollTo(0, 0);
      return setError("Passwords not matching");
    }
    setUserAsync(dispatch, formData);
  };

  return (
    <div className="register-form">
      {error && <Message type="error">{error}</Message>}
      <div className="fname">
        <label htmlFor="fname">First Name</label>
        <input
          onChange={handleChange}
          value={formData.fname}
          type="text"
          id="fname"
          name="fname"
        />
      </div>
      <div className="lname">
        <label htmlFor="lname">Last Name</label>
        <input
          onChange={handleChange}
          value={formData.lname}
          type="text"
          id="lname"
          name="lname"
        />
      </div>
      <div className="username">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.username}
          id="username"
          name="username"
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className="birthday">
        <label htmlFor="birthday">Birthday</label>
        <input
          onChange={handleChange}
          type="date"
          id="birthday"
          name="birthday"
        />
      </div>
      <div className="gender">
        <label htmlFor="gender">Gender</label>
        <select name="gender" onChange={handleChange} id="gender">
          <option hidden value="">
            --Please choose a gender--
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
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
      </div>
      <div className="password">
        <label htmlFor="cpassword">Confirm Password</label>
        <div className="password-input">
          <input
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            value={confirmPass}
            type={isPasswordVisible ? "text" : "password"}
            id="cpassword"
            name="cpassword"
          />
        </div>
      </div>
      <CustomButton
        disable={isLoading ? true : false}
        onClick={handleSubmit}
        type="normal"
      >
        Register now!
      </CustomButton>
    </div>
  );
};
