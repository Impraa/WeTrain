import { UserInfo as UserInfoInter } from "../../utils/Interfaces/components/PropsInterfaces";
import React from "react";
import "./UserInfo.scss";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import IconPencil from "../../assets/IconPencil";
import CustomButton from "../custom-button/CustomButton";
import { Link, useParams } from "react-router-dom";

export const UserInfo: React.FC<UserInfoInter> = ({ user }) => {
  const { id } = useParams();
  return (
    <div className="user-info-card">
      <div className="profile-picture">
        <IconPencil className="pencil-icon" />
        {user.image ? <img src={user.image} /> : <WeTrainLogo />}
      </div>
      <div className="text">
        <h3 className="username">{user.username}'s profile</h3>
        <div className="buttons">
          {user.id == id ? (
            <Link
              to={`/edit-profile/${user.id}`}
              className="edit-profile-button"
            >
              Edit Profile
            </Link>
          ) : (
            <>
              <CustomButton type="normal" onClick={() => {}}>
                Follow
              </CustomButton>
              <CustomButton type="normal" onClick={() => {}}>
                Send a message
              </CustomButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
