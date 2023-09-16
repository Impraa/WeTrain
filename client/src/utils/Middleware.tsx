import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/UserSelector";
import { CheckAuth as CheckAuthInter } from "./Interfaces/components/PropsInterfaces";

export const CheckAuth: React.FC<CheckAuthInter> = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};
