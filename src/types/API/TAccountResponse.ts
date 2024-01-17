import {TAccount} from "types/entities/TAccount.ts";

export type GetRegistrationResponse = {
  token: string;
  user: TAccount;
}

export type GetLoginResponse = {
  token: string;
  user: TAccount;
}

export type GetAuthResponse = {
  user: TAccount;
}