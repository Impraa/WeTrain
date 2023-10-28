import axios, { AxiosResponse } from "axios";

export const getSingleMembership = (id: string) => {
  return axios
    .get(`http://localhost:3000/membership/${id}`, {
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
