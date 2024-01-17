export type TAccount = {
  userId: number
  username: string;
  updated_at: string;
  created_at: string;
}

export type TRegistrationData = {
  username: string;
  password: string;
}

export type TLoginData = {
  username: string;
  password: string;
}