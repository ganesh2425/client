import { loginTypes, roleTypes} from "../constants/actionTypes";

// Login
export interface LoginState {
    pending: boolean;
    error: string | null;
    accessToken: string;
  }

  export interface Login {
    username: string
    //email: string;
    password: string;
    //isCaptchaVerified: number;
  }
  
  export interface AuthResponse {
    token: string;
  }

  export interface FetchPostsFailurePayload {
    error: string;
  }

  export interface FetchLoginRequest {
    type: typeof loginTypes.FETCH_LOGIN_REQUEST;
    payload: Login;
  }
  
  export type FetchLoginSuccess = {
    type: typeof loginTypes.FETCH_LOGIN_SUCCESS;
    payload: AuthResponse;
  };
  
  export type FetchLoginFailure = {
    type: typeof loginTypes.FETCH_LOGIN_FAILURE;
    payload: FetchPostsFailurePayload;
  };
  
  export type LoginActions =
    | FetchLoginRequest
    | FetchLoginSuccess
    | FetchLoginFailure;
// role

export interface FetchRoleRequest {
  type: typeof roleTypes.FETCH_ROLE_REQUEST;
  payload: any;
}

export type FetchRoleSuccess = {
  type: typeof roleTypes.FETCH_ROLE_SUCCESS;
  payload: any;
};

export type FetchRoleFailure = {
  type: typeof roleTypes.FETCH_ROLE_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type RoleActions =
  | FetchRoleRequest
  | FetchRoleSuccess
  | FetchRoleFailure;

  export interface RoleState {
    pending: boolean;
    error: string | null;
    JSON: [];
  }