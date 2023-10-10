import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../../components/spinner/Spinner";

const Notifications = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
};
export default Notifications;
