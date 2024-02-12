import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface TMakeRequestParams extends AxiosRequestConfig {
  hasAuthToken?: boolean;
  defaultUrl?: boolean;
}

export type APIResponse<Type> = Promise<AxiosResponse<Type> | APIError>;

export type APIError = {
  errors: {
    [key: string]: string;
  };
  status: number;
};