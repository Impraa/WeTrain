import { Suspense } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";
import { selectNotifications } from "../../redux/notification/NotificationSelector";
import Notification from "../../components/notification/Notification";
import "./Notifications.scss";

const Notifcations = () => {
  const notifications = useSelector(selectNotifications);

  return (
    <Suspense fallback={<Spinner />}>
      <div className="notifications">
        {notifications.map((notification) => {
          return (
            <Notification key={notification.id} notification={notification} />
          );
        })}
      </div>
    </Suspense>
  );
};

export default Notifcations;
