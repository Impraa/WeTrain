import axios from "axios";
import { UserRegister } from "../../../types/User";

export const registerUser = (formData: UserRegister) => {
  return axios.post("http://localhost:3000/register", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
  });
};
