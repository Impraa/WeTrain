import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { BasicInfo } from "../../components/basic-info/BasicInfo";

const EditProfile = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div>
      <BasicInfo user={user} />
    </div>
  );
};

export default EditProfile;
