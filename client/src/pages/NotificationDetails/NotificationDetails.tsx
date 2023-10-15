import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import { useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { getSingleNotificationAsync } from "../../redux/notification/NotificationAction";
import { useDispatch, useSelector } from "react-redux";
import { selectNotification } from "../../redux/notification/NotificationSelector";

const NotificationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleNotificationAsync(dispatch, id!);
  }, [id]);

  const notification = useSelector(selectNotification);

  return (
    <div className="notification-details">
      {notification ? (
        <>
          {notification.image ? (
            <img src={`http://localhost:3000/${notification.image}`} />
          ) : (
            <WeTrainLogo />
          )}

          <h2>{notification.title}</h2>
          <p>{notification.text}</p>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NotificationDetails;
