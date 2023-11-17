import buffer from "buffer";
global.Buffer = buffer.Buffer;
import axios, { AxiosResponse } from "axios";
import {
  UserChangeBasicInfo,
  UserChangePassword,
  UserLogin,
  UserRegister,
} from "../../../types/User";

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
    .get(`http://localhost:3000/user/get-user/${id}`, {
      headers: { "Content-Type": "image/jpeg" },
    })
    .catch((error) => {
      return {
        statusText: error.response.data,
        status: error.response.status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as unknown as AxiosResponse<any, any>;
    });
};

export const updateUserBasicInfo = (formData: UserChangeBasicInfo) => {
  return axios
    .put(`http://localhost:3000/user/basic-info`, formData, {
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

export const updateUserPassword = (formData: UserChangePassword) => {
  return axios
    .put(`http://localhost:3000/user/change-password`, formData, {
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

export const sendUserResetPassword = (email: string) => {
  return axios
    .post(
      `http://localhost:3000/user/send-reset-password-link`,
      { email: email },
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

export const resetUserPassword = (newPassword: string, id: number) => {
  return axios
    .put(
      `http://localhost:3000/user/reset-password`,
      { newPassword: newPassword, id: id },
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

export const createPaymentIntent = (amount: string) => {
  return axios
    .post(
      `http://localhost:3000/user/create-payment-intent`,
      { amount: amount },
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

export const createPayment = (amount: string) => {
  return axios
    .post(
      `http://localhost:3000/user/payment`,
      { amount: amount },
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
