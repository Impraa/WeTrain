import buffer from "buffer";
global.Buffer = buffer.Buffer;
import axios, { AxiosResponse } from "axios";
import { UserLogin, UserRegister } from "../../../types/User";

export const registerUser = (formData: UserRegister) => {
  return axios
    .post("http://localhost:3000/user/register", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

export const loginUser = (formData: UserLogin) => {
  return axios
    .post("http://localhost:3000/user/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

export const verifyUser = (id: string) => {
  return axios
    .post(
      "http://localhost:3000/user/verify",
      { id: id },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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

export const uploadUserProfilePicture = (id: string, file: File) => {
  return axios
    .post(
      "http://localhost:3000/user/upload-profile-pic",
      { id: id, image: file },
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

export const getSingleUser = (id: string) => {
  return axios
    .get(`http://localhost:3000/user/get-user/${id}`)
    .catch((error) => {
      return {
        statusText: error.response.data,
        status: error.response.status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as unknown as AxiosResponse<any, any>;
    });
};
