import React from "react";
import { Notifcation } from "../../utils/Interfaces/components/PropsInterfaces";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import "./Notification.scss";
import { Link } from "react-router-dom";

const Notification: React.FC<Notifcation> = ({
  notification,
  onMouseOver,
  onMouseOut,
  isHovered,
}) => {
  return (
    <div className="wrapper">
      {isHovered === notification.id ? (
        <Link
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          to={`/notifications/${notification.id}`}
          className="notification hovered"
        >
          <div className="image">
            {notification.image ? (
              <img src={`http://localhost:3000/${notification.image}`} />
            ) : (
              <WeTrainLogo />
            )}
          </div>
          <div className="text">
            <h2>{notification.title}</h2>
            <p>{notification.text.slice(0, 50)}</p>
          </div>
        </Link>
      ) : (
        ""
      )}

      <Link
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        to={`/notifications/${notification.id}`}
        className={
          isHovered !== 0 && isHovered !== notification.id
            ? "notification blur"
            : isHovered === notification.id
            ? "hide notification"
            : "notification"
        }
      >
        <div className="image">
          {notification.image ? (
            <img src={`http://localhost:3000/${notification.image}`} />
          ) : (
            <WeTrainLogo />
          )}
        </div>
        <h2>{notification.title}</h2>
      </Link>
    </div>
  );
};

export default Notification;
