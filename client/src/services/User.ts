import axios, { AxiosResponse } from "axios";
import { UserRegister } from "../../../types/User";

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
