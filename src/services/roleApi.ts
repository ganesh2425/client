import axios from "axios";
import {BASE_URL} from "../constants/actionTypes";
import StorageService from "./Storage.service";
const token = StorageService.getCookies("accessToken");

export const getROLEDetails =(payload: any) => {
    return axios({
        method: "get",
        headers: {
        
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        url: BASE_URL + "/role/all",
        data: {},
        //headers: {"Authorization": localStorage.getItem('token')}
    })
        .then((response)=>{
            return response;
        })
        .catch((reason: any) =>{
            if (reason["message"] === "Network Error") {
                throw reason["message"];
            } else {
                return reason;
            }
        });
};