import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { APIError, APIResponse } from 'interface/IResponseAPI';
import { Platform } from 'react-native';
import { AxiosAuthInstance } from 'services/AxiosInstance';

interface GetAppVersionResponse {
  id: string;
  version: string;
  link: string;
}

const getAppVersion = async ({
  platform,
}: {
  platform: typeof Platform.OS;
}) => {
  const { data } = await AxiosAuthInstance.get<
    APIResponse<GetAppVersionResponse>
  >(`/app-versions/kerjacermat-employee-app/${platform}`);
  return data;
};

const useGetAppVersion = ({
  platform,
  options,
}: {
  platform: typeof Platform.OS;
  options?: UseQueryOptions<APIResponse<GetAppVersionResponse>, APIError>;
}) => {
  return useQuery({
    queryKey: ['useGetAppVersion'],
    queryFn: () => getAppVersion({ platform }),
    ...options,
  });
};

export default useGetAppVersion;
