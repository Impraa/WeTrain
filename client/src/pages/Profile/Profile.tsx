import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectFoundUser,
} from "../../redux/user/UserSelector";
import { UserInfo } from "../../components/user-info/UserInfo";
import { getSingleUserAsync } from "../../redux/user/UserAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  const foundUser = useSelector(selectFoundUser);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      getSingleUserAsync(dispatch, id as string);
    }
  }, [user, id, dispatch]);

  return (
    <div className="profile">
      <UserInfo user={user ? user : foundUser} />
    </div>
  );
};

export default Profile;
