export type TRegistrationData = {
  username: string;
  email: string;
  password: string;
  approve_password: string;
}

export type TLoginData = {
  email: string;
  password: string;
}

export type TUpdateProfileData = {
  username: string;
  email: string;
}