import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';
import {
  retrieveLocalStorageItem,
  storeLocalStorageItem,
} from 'utils/LocalStorage';

interface IResponseRefreshToken {
  access_token?: string;
  refresh_token?: string;
  message: string;
  error: boolean;
}

const BaseHeaders = {
  'x-platform': 'kerjacermat-employee-app',
};

const GetRefreshToken = async ({
  token,
}: {
  token: string;
}): Promise<IResponseRefreshToken> =>
  new Promise((resolve, reject) => {
    fetch(`${Config.AUTH_SERVICE_URL}/refresh_token`, {
      headers: {
        ...BaseHeaders,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response: IResponseRefreshToken) => resolve(response))
      .catch((error) => {
        return reject(error);
      });
  });

export const syncRefreshToken = async (): Promise<IResponseRefreshToken> => {
  const refreshTokenCookie = await retrieveLocalStorageItem('UserRefreshToken');

  if (refreshTokenCookie) {
    const { access_token, refresh_token, error } = await GetRefreshToken({
      token: refreshTokenCookie,
    });

    if (!error && access_token && refresh_token) {
      await storeLocalStorageItem({
        storageKey: 'UserToken',

        storageValue: access_token,
      });
      await storeLocalStorageItem({
        storageKey: 'UserRefreshToken',

        storageValue: refresh_token,
      });

      return {
        access_token,

        refresh_token,
        message: '',
        error: false,
      };
    }
  }

  return {
    message: 'error',
    error: true,
  };
};

export const axiosBaseConfigOptions: AxiosRequestConfig = {
  timeout: 30000,
  headers: BaseHeaders,
};

export const axiosInterceptorRequest = async (
  headerConfig: InternalAxiosRequestConfig,
) => {
  const token = await retrieveLocalStorageItem('UserToken');

  if (token && headerConfig.headers) {
    headerConfig.headers.Authorization = `Bearer ${token}`;
  }

  axios.defaults.headers.common['x-platform'] = BaseHeaders['x-platform'];

  return headerConfig;
};

export const axiosInterceptorResponseError = async ({
  error,
}: {
  error: AxiosError;
  instance: AxiosInstance;
}) => {
  const status = error.response ? error.response.status : null;
  const errorConfig = error.config;

  if (status === 406) {
    return syncRefreshToken()
      .then(({ access_token, error: syncError }) => {
        if (!syncError && access_token && errorConfig?.headers) {
          errorConfig.headers.Authorization = `Bearer ${access_token}`;
        }
      })
      .finally(() => {
        if (errorConfig) {
          axios.request(errorConfig);
        }
      });
  }
  return Promise.reject(error);
};

const instanceAuthOption: AxiosRequestConfig = {
  baseURL: Config.AUTH_SERVICE_URL,
  ...axiosBaseConfigOptions,
};

export const AxiosAuthInstance = axios.create(instanceAuthOption);
AxiosAuthInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    axiosInterceptorResponseError({
      error,
      instance: AxiosAuthInstance,
    }),
);
