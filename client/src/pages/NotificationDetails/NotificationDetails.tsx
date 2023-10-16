import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Spinner from "../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { getSingleNotificationAsync } from "../../redux/notification/NotificationAction";
import { useDispatch, useSelector } from "react-redux";
import { selectNotification } from "../../redux/notification/NotificationSelector";
import "./NotificationDetails.scss";

const NotificationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.025], [0.97, 1]);

  useEffect(() => {
    getSingleNotificationAsync(dispatch, id!);
  }, [id]);

  const notification = useSelector(selectNotification);

  return (
    <div className="notification-details">
      {notification ? (
        <>
          {notification.image ? (
            <img
              className="image"
              src={`http://localhost:3000/${notification.image}`}
            />
          ) : (
            <WeTrainLogo className="image" />
          )}
          <motion.div
            style={{
              scale,
              margin: "-4em 0px 0px 0px",
            }}
            className="outer-div"
          >
            <h2>{notification.title}</h2>
            <p>{notification.text}</p>
          </motion.div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NotificationDetails;
