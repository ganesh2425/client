import axios from "axios";
import { BASE_URL } from "../constants/actionTypes";
import StorageService from "./Storage.service";
const token = StorageService.getCookies("token");

type loginState = {
  username: "";
  password: "";
  isCaptchaVerified: 0;
};
export const getAuthDetails = (payload: loginState): any => {
  try {
    return axios({
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: BASE_URL + "/auth/signin",
      data: { username: payload.username, password: payload.password },
    });
  } catch (error) {
    throw error;
  }
};

 