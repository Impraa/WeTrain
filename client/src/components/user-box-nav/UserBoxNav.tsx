import React from "react";
import CustomButton from "../custom-button/CustomButton";
import NavItem from "../nav-item/NavItem";
import { UserNavBox } from "../../utils/Interfaces/components/PropsInterfaces";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/UserAction";

export const UserBoxNav: React.FC<UserNavBox> = ({ user }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser(user));
  };

  return (
    <>
      {" "}
      <div className="user-info">
        <p>Hello,</p> <NavItem path="/profile">{user.username}</NavItem>{" "}
      </div>
      <CustomButton onClick={logoutHandler} type="nav-button">
        Logout
      </CustomButton>{" "}
    </>
  );
};
