import { useState } from "react";
import { BasicInfo as BasicInfoInter } from "../../utils/Interfaces/components/PropsInterfaces";
import CustomButton from "../custom-button/CustomButton";
import "./BasicInfo.scss";
import { UserChangeBasicInfo } from "../../../../types/User";
import { updateUserBasicInfoAsync } from "../../redux/user/UserAction";
import { useDispatch } from "react-redux";

export const BasicInfo: React.FC<BasicInfoInter> = ({ user }) => {
  const parsedBirthday = new Date(user.birthday);
  const formattedBirthday = parsedBirthday.toLocaleDateString();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<UserChangeBasicInfo>({
    id: user.id,
    fName: user.fName,
    lName: user.lName,
    email: user.email,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData((prevFormData: UserChangeBasicInfo) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitValue = () => {
    updateUserBasicInfoAsync(dispatch, formData);
  };

  return (
    <div className="basic-info">
      <div className="first-name">
        <label>First name</label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={formData.fName}
          onChange={changeHandler}
        />
      </div>
      <div className="last-name">
        <label>Last name</label>
        <input
          type="text"
          id="lName"
          name="lName"
          value={formData.lName}
          onChange={changeHandler}
        />
      </div>
      <div className="email">
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>
      <div className="birth-date">
        <label>Birth date</label>
        <input type="string" disabled value={formattedBirthday} />
      </div>
      <div className="gender">
        <label>Gender</label>
        <input
          type="string"
          disabled
          value={user.gender[0].toUpperCase() + user.gender.slice(1)}
        />
      </div>
      <CustomButton onClick={submitValue} type="normal">
        Save changes
      </CustomButton>
    </div>
  );
};
