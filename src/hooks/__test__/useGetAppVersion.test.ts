import { renderHook } from '@testing-library/react-hooks';

import { wrapper } from 'utils/test-libs-utils';
import useGetAppVersion from '../useGetAppVersion';

describe('App Version hooks (Android)', () => {
  it('should fire useGetAppVersion', async () => {
    const { result, waitFor } = renderHook(
      () => useGetAppVersion({ platform: 'android' }),
      {
        wrapper,
      },
    );
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.data.id).toEqual('kerjacermat-employee-app');
  });
});
