declare module 'react-native-config' {
  interface AppsEnv {
    APP_ENV: 'Development' | 'Staging' | 'Production';
    APP_ID: '';
    AUTH_SERVICE_URL: '';
  }

  const Config: AppsEnv;

  export default Config;
}
