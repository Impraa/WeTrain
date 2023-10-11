import { memo, useState } from "react";
import "./CreateNotification.scss";
import { CreateNotification } from "../../../../types/Notification";

const CreateNotification = memo(function MyFunction() {
  const [formData, setFormData] = useState<CreateNotification>({
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
      <div className="image">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          onChange={updateProfilePicture}
          id="image"
          name="image"
        />
      </div>
    </div>
  );
});

export default CreateNotification;
