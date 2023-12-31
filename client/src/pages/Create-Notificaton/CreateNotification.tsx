import { memo, useEffect, useState } from "react";
import "./CreateNotification.scss";
import { CreateNotification as NotificationInter } from "../../../../types/Notification";
import IconHardDriveUpload from "../../assets/IconHardDriveUpload";
import CustomButton from "../../components/custom-button/CustomButton";
import { createNotificationAsync } from "../../redux/notification/NotificationAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import {
  selectNotification,
  selectNotificationIsLoading,
  selectNotifications,
} from "../../redux/notification/NotificationSelector";
import { useLocation, useNavigate } from "react-router-dom";

const CreateNotification = memo(function MyFunction() {
  const navigate = useNavigate();
  const isLoading = useSelector(selectNotificationIsLoading);

  const user = useSelector(selectCurrentUser)!;
  const notification = useSelector(selectNotification);
  const notifications = useSelector(selectNotifications);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState<NotificationInter>({
    title: "",
    text: "",
  });
  const [image, setImage] = useState<File>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = () => {
    createNotificationAsync(dispatch, formData, user, image!);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const updateProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      setImage(selectedFile);
    }
  };

  useEffect(() => {
    if (notification) {
      const isAlreadyExisting = notifications.find(
        (item) => item.id === notification.id
      );

      if (isAlreadyExisting === undefined) {
        return navigate(`/notifications/${notification.id}`, {
          state: { notification: notification },
        });
      }
    }
  }, [notification]);

  return (
    <div className="create-notification">
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.title}
          id="title"
          name="title"
        />
      </div>
      <div className="text">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.text}
          id="text"
          name="text"
        />
      </div>
      <div>
        <label htmlFor="image" className="image">
          <IconHardDriveUpload />
          <h2>Here you can upload your image</h2>
          <input
            type="file"
            onChange={updateProfilePicture}
            id="image"
            name="image"
            hidden
          />
        </label>
      </div>
      <CustomButton disable={isLoading} onClick={handleSubmit} type="normal">
        Create new notification
      </CustomButton>
    </div>
  );
});

export default CreateNotification;
