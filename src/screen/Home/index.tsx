import { BottomNavigationComponent, ToastComponent } from 'components';
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreenContainer = () => {
  const toastRef = useRef<any>(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  return (
    <View className="flex-1 bg-['#F4F5F6']">
      <Text className="text-black">Ini Homes</Text>
      <TouchableOpacity onPress={() => handleShowToast()}>
        <Text className="text-black">Ini Button</Text>
      </TouchableOpacity>
      <ToastComponent
        type="success"
        text="This is a success toast message!"
        description="This is description text"
        timeout={2000}
        ref={toastRef}
      />
      <BottomNavigationComponent />
    </View>
  );
};

export default HomeScreenContainer;
