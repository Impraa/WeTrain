import { memo, useState } from "react";
import "./CreateNotification.scss";
import { CreateNotification as NotificationInter } from "../../../../types/Notification";
import IconHardDriveUpload from "../../assets/IconHardDriveUpload";
import CustomButton from "../../components/custom-button/CustomButton";

const CreateNotification = memo(function MyFunction() {
  const [formData, setFormData] = useState<NotificationInter>({
    title: "",
    text: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const updateProfilePicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      setFormData((prevFormData) => ({ ...prevFormData, image: selectedFile }));
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
            onChange={updateProfilePicture}
            id="image"
            name="image"
            hidden
          />
        </label>
      </div>
      <CustomButton onClick={() => {}} type="normal">
        Create new notification
      </CustomButton>
    </div>
  );
});

export default CreateNotification;
