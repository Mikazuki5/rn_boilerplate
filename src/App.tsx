import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigationScreen from 'navigation/MainNavigationScreen';

const app = () => {
  return (
    <SafeAreaProvider>
      <MainNavigationScreen />
    </SafeAreaProvider>
  );
};

export default app;
