import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";
import { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Spinner from "../../components/spinner/Spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteNotifcationAsync, getSingleNotificationAsync } from "../../redux/notification/NotificationAction";
import { useDispatch, useSelector } from "react-redux";
import { selectNotification } from "../../redux/notification/NotificationSelector";
import "./NotificationDetails.scss";
import IconPencil from "../../assets/IconPencil";
import IconTrashFill from "../../assets/IconTrash";
import { selectCurrentUser } from "../../redux/user/UserSelector";

const NotificationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const notificationProp = location.state?.notification;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.025], [0.97, 1]);

  useEffect(() => {
    getSingleNotificationAsync(dispatch, id!);
  }, [id]);

  const handleDelete = () => {
    deleteNotifcationAsync(dispatch,id as string,user!).then((response) => {if(response === true){
      return navigate("/");
    }})
  }

  const notification = useSelector(selectNotification);
  return (
    <div className="notification-details">
      {notification ? (
        <>
          <div className="image">
            {notification.image ? (
              <img
                className="image"
                src={`http://localhost:3000/${notification.image}`}
              />
            ) : (
              <WeTrainLogo className="image" />
            )}
          </div>
          <motion.div
            style={{
              scale,
              margin: "-4em 0px 0px 0px",
            }}
            className="outer-div"
          >
            <h2>{notification.title} {user && user.role === "admin" ?<><IconPencil onClick={() => navigate(`/notifications/update/${id}`)} className="pencil"/> <IconTrashFill onClick={() => {handleDelete()}} className="trash-can"/></> : ""}</h2>
            <p>{notification.text} </p>
          </motion.div>
        </>
      ) : notificationProp ? (
        <>
          {notificationProp.image ? (
            <img
              className="image"
              src={`http://localhost:3000/${notificationProp.image}`}
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
            <h2>{notificationProp.title} {user && user.role === "admin" ?<><IconPencil onClick={() => navigate(`/notifications/update/${id}`)} className="pencil"/> <IconTrashFill onClick={() => {handleDelete()}} className="trash-can"/></> : ""}</h2>
            
            <p>{notificationProp.text}</p>
          </motion.div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default NotificationDetails;
