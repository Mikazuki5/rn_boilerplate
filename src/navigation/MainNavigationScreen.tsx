import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {TMainNavigationScreen} from 'types/TNavigation';
import {
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  StackNavigationOptions,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';
import {HomeScreenContainer} from 'screen';

const Stack = createStackNavigator<TMainNavigationScreen>();
const navigationRef = createNavigationContainerRef<TMainNavigationScreen>();

const SlideTransition: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, layouts}: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const MainNavigationScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...SlideTransition,
        }}>
        <Stack.Screen name="Home" component={HomeScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationScreen;
