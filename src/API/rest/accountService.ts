import makeRequest from "API/makeRequest.ts";

import {TLoginData, TRegistrationData} from "types/entities/TAccount.ts";

import {GetAuthResponse, GetLoginResponse, GetRegistrationResponse} from "types/API/TAccountResponse.ts";

class AccountService {
  async registration(data: TRegistrationData) {
    return await makeRequest<GetRegistrationResponse>({
      url: 'api/registration',
      method: 'post',
      data
    })
  }

  async login(data: TLoginData) {
    return await makeRequest<GetLoginResponse>({
      url: 'api/login',
      method: 'post',
      data
    })
  }

  async auth() {
    return await makeRequest<GetAuthResponse>({
      url: 'api/auth',
      hasAuthToken: true,
    })
  }
}

export default new AccountService()