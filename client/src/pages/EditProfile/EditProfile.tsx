import { Outlet } from "react-router-dom";
import EditProfileNav from "../../components/edit-profile-nav/EditProfileNav";

const EditProfile = () => {
  return (
    <>
      <EditProfileNav />
      <Outlet />
    </>
  );
};

export default EditProfile;
