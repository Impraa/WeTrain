import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Verify } from "./pages/Verify/Verify";
import { CheckAuth, CheckClientSecret } from "./utils/Middleware";
import Spinner from "./components/spinner/Spinner";
import { BasicInfo } from "./components/basic-info/BasicInfo";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/UserSelector";
import Payment from "./pages/Payment/Payment";
import ChooseAMembership from "./pages/Choose-a-membership/ChooseAMembership";

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const Navbar = lazy(() => import("./layout/navbar/Navbar"));
const Footer = lazy(() => import("./layout/footer/Footer"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const ForgotPassword = lazy(
  () => import("./pages/Forgot-Password/ForgotPassword")
);
const EmailSent = lazy(() => import("./pages/Email-Sent/EmailSent"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Error404 = lazy(() => import("./pages/Error404/Error404"));
const EditProfile = lazy(() => import("./pages/EditProfile/EditProfile"));
const ResetPassword = lazy(() => import("./pages/ResetPassword/ResetPassword"));
const ChangePassword = lazy(
  () => import("./pages/ChangePassword/ChangePassword")
);
const NotificationsOutlet = lazy(
  () => import("./pages/Notifications-Outlet/NotificationsOutlet")
);
const Notifications = lazy(() => import("./pages/Notifications/Notifications"));
const CreateNotification = lazy(
  () => import("./pages/Create-Notificaton/CreateNotification")
);
const NotificationDetails = lazy(
  () => import("./pages/NotificationDetails/NotificationDetails")
);
const UpdateNotification = lazy(
  () => import("./pages/Update-Notification/UpdateNotification")
);
const Memebership = lazy(() => import("./pages/Membership/Memebership"));

function Router() {
  const user = useSelector(selectCurrentUser);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/membership" element={<Memebership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/verify/:id" element={<Verify />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/payment"
            element={
              <CheckClientSecret>
                <Payment />
              </CheckClientSecret>
            }
          />
          <Route
            path="/choose-a-memebership"
            element={
              <CheckAuth>
                <ChooseAMembership />{" "}
              </CheckAuth>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <CheckAuth>
                <EditProfile />
              </CheckAuth>
            }
          >
            <Route index element={<BasicInfo user={user!} />} />
            <Route
              path="/edit-profile/change-password"
              element={<ChangePassword />}
            />
          </Route>
          <Route path="/notifications" element={<NotificationsOutlet />}>
            <Route index element={<Notifications />} />
            <Route
              path="/notifications/create"
              element={<CreateNotification />}
            />
            <Route
              path="/notifications/update/:id"
              element={<UpdateNotification />}
            />
            <Route
              path="/notifications/:id"
              element={<NotificationDetails />}
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default Router;
