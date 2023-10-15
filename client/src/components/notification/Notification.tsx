import React from "react";
import { Notifcation } from "../../utils/Interfaces/components/PropsInterfaces";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import "./Notification.scss";
import { Link } from "react-router-dom";

const Notification: React.FC<Notifcation> = ({ notification }) => {
  return (
    <Link to={`/notifications/${notification.id}`} className="notification">
      <div className="image">
        {notification.image ? (
          <img src={`http://localhost:3000/${notification.image}`} />
        ) : (
          <WeTrainLogo />
        )}
      </div>
      <h2>{notification.title}</h2>
    </Link>
  );
};

export default Notification;
