import { memo, useEffect, useState } from "react";
import "./UpdateNotification.scss";
import { CreateNotification as NotificationInter } from "../../../../types/Notification";
import IconHardDriveUpload from "../../assets/IconHardDriveUpload";
import CustomButton from "../../components/custom-button/CustomButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectNotification,
  selectNotificationError,
  selectNotificationIsLoading,
} from "../../redux/notification/NotificationSelector";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getSingleNotificationAsync,
  updateNotificationAsync,
} from "../../redux/notification/NotificationAction";
import { selectCurrentUser } from "../../redux/user/UserSelector";

const UpdateNotification = memo(function MyFunction() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectNotificationIsLoading);
  const error = useSelector(selectNotificationError);

  const notification = useSelector(selectNotification);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!notification) {
      getSingleNotificationAsync(dispatch, id as string);
    }
    if (notification) {
      setFormData(notification);
    }
  }, [notification]);

  const [formData, setFormData] = useState<NotificationInter>({
    title: notification ? notification.title : "",
    text: notification ? notification.text : "",
  });
  const [image, setImage] = useState<File>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = () => {
    updateNotificationAsync(dispatch, formData, id as string, user!, image!);

    if (!error) {
      return navigate(`/notifications/${id}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const updateNotificationPicture = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      setImage(selectedFile);
    }
  };

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
            onChange={updateNotificationPicture}
            id="image"
            name="image"
            hidden
          />
        </label>
      </div>
      <CustomButton disable={isLoading} onClick={handleSubmit} type="normal">
        Update notification
      </CustomButton>
    </div>
  );
});

export default UpdateNotification;
