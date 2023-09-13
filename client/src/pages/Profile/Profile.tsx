import "./Profile.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { UserInfo } from "../../components/user-info/UserInfo";

const Profile = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div className="profile">
      <UserInfo user={user} />
    </div>
  );
};

export default Profile;
