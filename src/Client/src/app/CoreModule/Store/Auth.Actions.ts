import { createAction, props } from "@ngrx/store";
import { RegisterModel } from '../Models/RegisterModel/RegisterModel';

export const LoginRequest = createAction("[Login Effect] Login Request");
export const LoginProceed = createAction("[Login Component] Login Proceed");
export const LoginSuccess = createAction("[Login Component] Login Success", props<{ userAndToken: any }>());
export const LoginFailed = createAction("[Login Component] Login Failed", props<{ error: string }>());

export const RegisterRequest = createAction("[Register Effect] Registration API Request", props<{ payload: RegisterModel }>());
export const RegisterProcessing = createAction("[Register Component] Registration Processing");
export const RegisterSuccess = createAction("[Register Component] Registration Success", props<{ payload: RegisterModel }>());
export const RegisterFailed = createAction("[Register Component] Registration Failed", props<{ error: string }>());

export const LogoutRequest = createAction("[Logout Request] Logout Request");
export const RefreshToken = createAction("[Refresh Token] Refresh Token Request");

export const AuthTokenUnion = {
    LoginRequest, LoginSuccess,
    RegisterRequest, RegisterSuccess, RegisterFailed,
    LogoutRequest, RefreshToken
}