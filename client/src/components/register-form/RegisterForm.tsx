import { useState } from "react";
import IconEye from "../../assets/IconEye";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import "./RegisterForm.scss";
import CustomButton from "../custom-button/CustomButton";
import { UserRegister } from "../../../../types/User";
import { registerUser } from "../../services/User";
import { setUserAsync } from "../../redux/user/UserAction";
import { useDispatch } from "react-redux";

export const RegisterForm = () => {
  const dispatch = useDispatch();
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
    const user = await registerUser(formData);

    console.log(user);

    /*   setUserAsync(dispatch, user); */
  };

  return (
    <div className="register-form">
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
            type={isPasswordVisible ? "text" : "password"}
            id="cpassword"
            name="cpassword"
          />
        </div>
      </div>
      <CustomButton onClick={handleSubmit} type="normal">
        Register now!
      </CustomButton>
    </div>
  );
};
