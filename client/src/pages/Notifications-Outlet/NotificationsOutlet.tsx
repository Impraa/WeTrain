import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllNotificationsAsync } from "../../redux/notification/NotificationAction";

const NotifcationsOutlet = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    getAllNotificationsAsync(dispatch);
  }, [location.pathname]);

  return <Outlet />;
};
export default NotifcationsOutlet;
