import { Suspense, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";
import { selectNotifications } from "../../redux/notification/NotificationSelector";
import Notification from "../../components/notification/Notification";
import "./Notifications.scss";

const Notifcations = () => {
  const [isHovered, setIsHovered] = useState<number>(0);
  const notifications = useSelector(selectNotifications);

  return (
    <Suspense fallback={<Spinner />}>
      <div className="notifications">
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              isHovered={isHovered}
              onMouseOver={() => setIsHovered(notification.id)}
              onMouseOut={() => setIsHovered(0)}
              notification={notification}
            />
          );
        })}
      </div>
    </Suspense>
  );
};

export default Notifcations;
