import { UserInfo as UserInfoInter } from "../../utils/Interfaces/components/PropsInterfaces";
import React from "react";
import "./UserInfo.scss";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import IconPencil from "../../assets/IconPencil";

export const UserInfo: React.FC<UserInfoInter> = ({ user }) => {
  return (
    <div className="user-info-card">
      <div className="profile-picture">
        <IconPencil className="pencil-icon" />
        {user.image ? <img src={user.image} /> : <WeTrainLogo />}
      </div>
      <h3 className="username">{user.username}'s profile</h3>
    </div>
  );
};
