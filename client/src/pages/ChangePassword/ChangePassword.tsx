import { useState } from "react";
import IconEye from "../../assets/IconEye";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import { UserChangePassword } from "../../../../types/User";
import { updateUserPasswordAsync } from "../../redux/user/UserAction";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/custom-button/CustomButton";

const ChangePassword = () => {
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
    useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<UserChangePassword>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFormData((prevFormData: UserChangePassword) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    updateUserPasswordAsync(dispatch, formData);
  };

  return (
    <div className="change-password">
      <div className="old-password">
        <label htmlFor="oldPassword">Old Password</label>
        <input
          id="oldPassword"
          name="oldPassword"
          onChange={changeHandler}
          value={formData.oldPassword}
          type={isOldPasswordVisible ? "text" : "password"}
        />
        {isOldPasswordVisible ? (
          <IconEye
            onClick={() => {
              setIsOldPasswordVisible(false);
            }}
          />
        ) : (
          <IconEyeInvisible
            onClick={() => {
              setIsOldPasswordVisible(true);
            }}
          />
        )}
      </div>
      <div className="new-password">
        <label htmlFor="newPassword">New password</label>
        <input
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={changeHandler}
          type={isNewPasswordVisible ? "text" : "password"}
        />
        {isNewPasswordVisible ? (
          <IconEye
            onClick={() => {
              setIsNewPasswordVisible(false);
            }}
          />
        ) : (
          <IconEyeInvisible
            onClick={() => {
              setIsNewPasswordVisible(true);
            }}
          />
        )}
      </div>
      <div className="confirm-new-password">
        <label htmlFor="confirmNewPassword">Confirm New password</label>
        <input
          id="confirmNewPassword"
          name="confirmNewPassword"
          onChange={changeHandler}
          value={formData.confirmNewPassword}
          type={isConfirmNewPasswordVisible ? "text" : "password"}
        />
        {isConfirmNewPasswordVisible ? (
          <IconEye
            onClick={() => {
              setIsConfirmNewPasswordVisible(false);
            }}
          />
        ) : (
          <IconEyeInvisible
            onClick={() => {
              setIsConfirmNewPasswordVisible(true);
            }}
          />
        )}
      </div>
      <CustomButton onClick={submitHandler} type="inverted">
        Change password
      </CustomButton>
    </div>
  );
};
export default ChangePassword;
