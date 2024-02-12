import {APIResponse} from "types/API/TAPI.ts";

import {TLoginData, TRegistrationData} from "types/entities/TAccount.ts";
import {GetAuthResponse, GetLoginResponse, GetRegistrationResponse} from "types/API/TAccountResponse.ts";
import {TUser} from "../entities/TUser.ts";

export interface IAccountStore {
  _account: TUser | null;
  _isLoading: boolean;

  // gets
  get account(): TUser | null;
  get isLoading(): boolean;
  get isAuth(): boolean;

  // sets
  setAccount(account: TUser | null): void;
  setIsLoading(isLoading: boolean): void;
  setToken(token: string): void;

  // async
  registration(data: TRegistrationData): APIResponse<GetRegistrationResponse>;
  login(data: TLoginData): APIResponse<GetLoginResponse>;
  auth(): APIResponse<GetAuthResponse>;
  logout(): void;
}