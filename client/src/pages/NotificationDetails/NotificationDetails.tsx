import React from "react";
import { Notifcation } from "../../utils/Interfaces/components/PropsInterfaces";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";

const Notification: React.FC<Notifcation> = ({ notification }) => {
  return (
    <div className="notification-details">
      {notification.image ? (
        <img src={`http://localhost:3000/${notification.image}`} />
      ) : (
        <WeTrainLogo />
      )}

      <h2>{notification.title}</h2>
      <p>{notification.text}</p>
    </div>
  );
};

export default Notification;
