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

export const getAllNotifications = () => {
  return axios
    .get("http://localhost:3000/notification/get-all", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .catch((error) => {
      return {
        statusText: error.response.data,
        status: error.response.status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as unknown as AxiosResponse<any, any>;
    });
};

export const getSingleNotification = (id: string) => {
  return axios
    .get(`http://localhost:3000/notification/get-one/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .catch((error) => {
      return {
        statusText: error.response.data,
        status: error.response.status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as unknown as AxiosResponse<any, any>;
    });
};
