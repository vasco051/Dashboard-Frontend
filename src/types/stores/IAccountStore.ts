import {TAccount, TLoginData, TRegistrationData} from "types/entities/TAccount.ts";

export interface IAccountStore {
  _account: TAccount | null;
  _isLoading: boolean;

  // gets
  get account(): TAccount | null;
  get isLoading(): boolean;
  get isAuth(): boolean;

  // sets
  setAccount(account: TAccount | null): void;
  setIsLoading(isLoading: boolean): void;
  setToken(token: string): void;

  // async
  registration(data: TRegistrationData): Promise<void>;
  login(data: TLoginData): Promise<void>;
  auth(): Promise<void>;
  logout(): void;
}