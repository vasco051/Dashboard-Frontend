import axios from 'axios';

import {staticLinks} from 'config/routingLinks.ts';
import {localStorageConst} from "config/localStorageConst.ts";

import {APIResponse, TMakeRequestParams} from 'types/API/TAPI.ts';

const makeRequest = <Type>({
                             url = '/',
                             method = 'GET',
                             hasAuthToken = false,
                             headers = {},
                             params = {},
                             data = {},
                             responseType = 'json',
                           }: TMakeRequestParams): APIResponse<Type> => {
  url = `${import.meta.env.VITE_APP_BACKEND_URL}/${url}`;

  if (hasAuthToken) {
    const token = localStorage.getItem(localStorageConst.token);
    headers.authorization = `Bearer ${token}`;
  }

  return axios
    .request<Type>({url, method, headers, params, data, responseType})
    .catch((errors) => {
      const responseErrors = errors.response?.data?.errors;
      const status = errors?.response?.status as number;

      if (status === 401 && !window.location.pathname.includes(staticLinks.notFound)) {
        window.location.pathname = staticLinks.notFound;
      }

      return {errors: responseErrors, status};
    });
};

export default makeRequest;
