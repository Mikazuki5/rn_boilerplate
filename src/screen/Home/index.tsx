import {
  BottomNavigationComponent,
  ModalBottomSheetComponent,
  ToastComponent,
} from 'components';
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreenContainer = () => {
  const toastRef = useRef<any>(null);
  const modalBottomSheetRef = useRef<any>(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleShowModaBottomSheet = () => {
    if (modalBottomSheetRef.current) {
      modalBottomSheetRef.current.show();
    }
  };

  return (
    <View className="flex-1 bg-['#F4F5F6']">
      <Text className="text-black">Ini Home</Text>
      <TouchableOpacity onPress={() => handleShowToast()}>
        <Text className="text-black">Ini Button</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleShowModaBottomSheet()}>
        <Text className="text-black">Ini Modal</Text>
      </TouchableOpacity>

      <ToastComponent
        type="success"
        text="This is a success toast message!"
        description="This is description text"
        timeout={2000}
        ref={toastRef}
      />
      <BottomNavigationComponent />
      <ModalBottomSheetComponent ref={modalBottomSheetRef} />
    </View>
  );
};

export default HomeScreenContainer;
