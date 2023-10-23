import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectFoundUser,
} from "../../redux/user/UserSelector";
import { UserInfo } from "../../components/user-info/UserInfo";
import {
  getSingleUserAsync,
  setFoundUserFailed,
} from "../../redux/user/UserAction";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { User } from "../../../../types/User";
import Spinner from "../../components/spinner/Spinner";

const Profile = () => {
  const user = useSelector(selectCurrentUser) as unknown as User;
  const foundUser = useSelector(selectFoundUser) as unknown as User;
  const location = useLocation();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      getSingleUserAsync(dispatch, id as string);
      dispatch(setFoundUserFailed(null));
    }
  }, [location.pathname]);

  return (
    <div className="profile">
      { foundUser ?
      <UserInfo user={user ? user : foundUser} /> :
      <Spinner/>
}
    </div>
  );
};

export default Profile;
