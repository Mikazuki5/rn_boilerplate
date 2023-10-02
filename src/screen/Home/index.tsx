import { BottomNavigationComponent } from 'components';
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreenContainer = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Ini Homes</Text>
      <BottomNavigationComponent />
    </View>
  );
};

export default HomeScreenContainer;
