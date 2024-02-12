import { TUser } from "types/entities/TUser.ts";

export type GetRegistrationResponse = {
  token: string;
  user: TUser;
}

export type GetLoginResponse = {
  token: string;
  user: TUser;
}

export type GetAuthResponse = {
  user: TUser;
}