import { memo, useState } from "react";
import { UserResetPassword } from "../../../../types/User";
import IconEye from "../../assets/IconEye";
import IconEyeInvisible from "../../assets/IconEyeInvisible";
import CustomButton from "../../components/custom-button/CustomButton";
import "./ResetPassword.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectNewPasswordError } from "../../redux/user/UserSelector";
import { Message } from "../../components/message/Message";
import { useNavigate, useParams } from "react-router-dom";
import { resetUserPasswordAsync } from "../../redux/user/UserAction";

const ResetPassword = memo(function MyFunc() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
    useState(false);
  const dispatch = useDispatch();

  const passwordError = useSelector(selectNewPasswordError);
  const [formData, setFormData] = useState<UserResetPassword>({
    newPassword: "",
    confirmNewPassword: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFormData((prevFormData: UserResetPassword) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    if (formData.newPassword === formData.confirmNewPassword) {
      const path = resetUserPasswordAsync(
        dispatch,
        formData.confirmNewPassword,
        id as unknown as number
      );
      path.then((response) => navigation(response!));
    }
  };

  return (
    <div className="reset-password">
      {passwordError && <Message type="error">{passwordError}</Message>}
      <div className="new-password">
        <label htmlFor="newPassword">New password</label>
        <div className="new-password-input">
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
      </div>
      <div className="confirm-new-password">
        <label htmlFor="confirmNewPassword">Confirm New password</label>
        <div className="confirm-new-password-input">
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
      </div>
      <CustomButton onClick={submitHandler} type="inverted">
        Reset password
      </CustomButton>
    </div>
  );
});

export default ResetPassword;
