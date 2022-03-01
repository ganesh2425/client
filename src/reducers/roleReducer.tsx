/* eslint-disable import/no-anonymous-default-export */
import { RoleActions, RoleState} from "../interfaces/types";
import {roleTypes} from "../constants/actionTypes";
import {RootState} from "./index";
import { string } from "yup";

const initialState: RoleState = {
    pending: false,
    error: null,
    JSON: []
   
};

export default (state = initialState, action: RoleActions) => {
    switch (action.type) {
        case roleTypes.FETCH_ROLE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case roleTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                pending: false,
                ...action.payload,
                error: null
            };
        case roleTypes.FETCH_ROLE_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRoleEnteredDetails = (state: RootState) => state.role;