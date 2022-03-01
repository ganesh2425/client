import { roleTypes } from "../constants/actionTypes";
import {
    FetchRoleFailure,
    FetchPostsFailurePayload,
    FetchRoleRequest,
    FetchRoleSuccess,
    AuthResponse
} from "../interfaces/types";

export const fetchROLERequest = (payload: any): FetchRoleRequest => ({
    type: roleTypes.FETCH_ROLE_REQUEST,
    payload
});

export const fetchROLESuccess = (
    payload: any
): FetchRoleSuccess => ({
    type: roleTypes.FETCH_ROLE_SUCCESS,
    payload
});

export const fetchROLEFailure = (
    payload: FetchPostsFailurePayload
): FetchRoleFailure => ({
    type: roleTypes.FETCH_ROLE_FAILURE,
    payload
});

export const setROLEAction = (payload: any, history: any) => ({
    type: roleTypes.ROLE_INFO,
    payload,
    history
});