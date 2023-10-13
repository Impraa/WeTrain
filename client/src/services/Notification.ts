import axios, { AxiosResponse } from "axios";
import { CreateNotification } from "../../../types/Notification";
import { User } from "../../../types/User";

export const createNotification = (
  formData: CreateNotification,
  user: User,
  file: File
) => {
  return axios
    .post(
      "http://localhost:3000/notification/create",
      { formData: formData, user: user, image: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    )
    .catch((error) => {
      return {
        statusText: error.response.data,
        status: error.response.status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as unknown as AxiosResponse<any, any>;
    });
};
