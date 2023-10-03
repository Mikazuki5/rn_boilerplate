import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigationScreen from 'navigation/MainNavigationScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

const queryClient = new QueryClient();

const app = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F4F5F6'} />
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <MainNavigationScreen />
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
};

export default app;
