/* eslint-disable no-undef */
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mock from 'react-native-permissions/mock';

// jest.mock('react-native-permissions', () => {
//   return mock;
// });

// jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// jest.mock('@react-native-firebase/auth', () => ({
//   GoogleAuthProvider: {
//     credential: jest.fn().mockReturnValue(''),
//   },
// }));

// jest.mock('@sentry/react-native', () => ({
//   init: jest.fn(),
//   ReactNavigationInstrumentation: jest.fn(),
//   ReactNativeTracing: jest.fn(),
// }));

// jest.mock('react-native-geolocation-service', () => ({
//   requestAuthorization: jest.fn(),
//   getCurrentPosition: jest.fn(),
// }));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// jest.mock('rn-fetch-blob', () => {
//   return {
//     DocumentDir: () => jest.fn(),
//     polyfill: () => jest.fn()
//   };
// });

// jest.mock('react-native-onesignal', () => {
//   return {
//     OneSignal: jest.fn(() => 'undefined'),
//     init: jest.fn(() => 'undefined'),
//     inFocusDisplaying: jest.fn(() => 'undefined'),
//     addEventListener: jest.fn(() => 'undefined'),
//     setAppId: jest.fn(() => 'undefined'),
//     promptForPushNotificationsWithUserResponse: jest.fn(() => 'undefined'),
//   };
// });

// jest.mock('react-native-code-push', () => {
//   const cp = () => (app) => app;
//   Object.assign(cp, {
//     InstallMode: {},
//     CheckFrequency: {},
//     SyncStatus: {},
//     UpdateState: {},
//     DeploymentStatus: {},
//     DEFAULT_UPDATE_DIALOG: {},

//     checkForUpdate: jest.fn(),
//     codePushify: jest.fn(),
//     getConfiguration: jest.fn(),
//     getCurrentPackage: jest.fn(),
//     getUpdateMetadata: jest.fn(),
//     log: jest.fn(),
//     notifyAppReady: jest.fn(),
//     notifyApplicationReady: jest.fn(),
//     sync: jest.fn(),
//   });
//   return cp;
// });

// jest.mock('react-native-reanimated', () =>
//   require('react-native-reanimated/mock'),
// );
