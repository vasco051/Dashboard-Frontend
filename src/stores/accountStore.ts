import {makeAutoObservable} from "mobx";

import {localStorageConst} from "config/localStorageConst.ts";
import accountService from "API/rest/accountService.ts";

import {TLoginData, TRegistrationData} from "types/entities/TAccount.ts";
import {IAccountStore} from "types/stores/IAccountStore.ts";
import {TUser} from "types/entities/TUser.ts";

export class AccountStore implements IAccountStore {
  _account: TUser | null = null;
  _isLoading: boolean = false;

  constructor() {
    if (localStorage.getItem(localStorageConst.token)) this.auth()

    makeAutoObservable(this);
  }

  // gets
  get account() {
    return this._account;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isAuth() {
    return this.account !== null
  }

  // sets
  setAccount(account: TUser | null) {
    this._account = account;
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading
  }

  setToken(token: string | null) {
    token
      ? localStorage.setItem(localStorageConst.token, token)
      : localStorage.removeItem(localStorageConst.token)
  }

  // async
  registration = async (data: TRegistrationData) => {
    this.setIsLoading(true)
    this.setAccount(null)

    const response = await accountService.registration(data)

    if ('data' in response) {
      this.setAccount(response.data.user)
      this.setToken(response.data.token)
    }

    this.setIsLoading(false)
    return response
  }

  login = async (data: TLoginData) => {
    this.setIsLoading(true)
    this.setAccount(null)

    const response = await accountService.login(data)

    if ('data' in response) {
      this.setAccount(response.data.user)
      this.setToken(response.data.token)
    }

    this.setIsLoading(false)
    return response
  }

  auth = async () => {
    this.setIsLoading(true)

    const response = await accountService.auth()

    if ('data' in response) {
      this.setAccount(response.data.user)
    } else if ('errors' in response) {
      this.setToken(null)
    }

    this.setIsLoading(false)
    return response
  }

  logout = () => {
    this.setAccount(null)
    this.setToken(null)
  }
}