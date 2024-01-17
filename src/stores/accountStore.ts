import {makeAutoObservable} from "mobx";

import {localStorageConst} from "config/localStorageConst.ts";
import accountService from "API/rest/accountService.ts";

import {TAccount, TLoginData, TRegistrationData} from "types/entities/TAccount.ts";
import {IAccountStore} from "types/stores/IAccountStore.ts";

export class AccountStore implements IAccountStore {
  _account: TAccount | null = null;
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
  setAccount(account: TAccount | null) {
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
  async registration(data: TRegistrationData) {
    this.setIsLoading(true)
    this.setAccount(null)

    const response = await accountService.registration(data)

    if ('data' in response) {
      this.setAccount(response.data.user)
      this.setToken(response.data.token)
    }

    this.setIsLoading(false)
  }

  async login(data: TLoginData) {
    this.setIsLoading(true)
    this.setAccount(null)

    const response = await accountService.login(data)

    if ('data' in response) {
      this.setAccount(response.data.user)
      this.setToken(response.data.token)
    }

    this.setIsLoading(false)
  }

  async auth() {
    this.setIsLoading(true)

    const response = await accountService.auth()

    if ('data' in response) {
      this.setAccount(response.data.user)
    }

    this.setIsLoading(false)
  }

  logout() {
    this.setAccount(null)
    this.setToken(null)
  }
}