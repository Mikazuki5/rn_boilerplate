import { BottomNavigationComponent } from 'components';
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreenContainer = () => {
  return (
    <View className="flex-1 bg-['#F4F5F6']">
      <Text className="text-black">Ini Homes</Text>
      <BottomNavigationComponent />
    </View>
  );
};

export default HomeScreenContainer;
