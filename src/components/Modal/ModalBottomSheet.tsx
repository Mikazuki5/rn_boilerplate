/* eslint-disable react-native/no-inline-styles */
import { Icon } from 'components/Icon';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutUp,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

const ModalBottomSheetComponent = forwardRef(({}, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  useImperativeHandle(ref, () => ({
    show: showModal,
    hide: hideModal,
  }));

  return (
    <>
      {isVisible ? (
        <>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: 'rgba(20, 23, 24, 0.5)', opacity: 1 },
            ]}
            entering={FadeInUp.delay(200)}
            exiting={FadeOutUp}>
            <TouchableOpacity className="flex-1" onPress={hideModal} />
          </Animated.View>
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown}
            className="absolute bottom-0 min-h-[200px] max-h-[500px] bg-white w-full rounded-tl-3xl rounded-tr-3xl p-4 shadow-neutral-400 shadow-[0px_9px_30px]"
            style={{ elevation: 5 }}>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-black">Ini modalBottom sheets</Text>
              <TouchableOpacity onPress={hideModal}>
                <Icon name="close" size="28px" />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </>
      ) : null}
    </>
  );
});

export default ModalBottomSheetComponent;
