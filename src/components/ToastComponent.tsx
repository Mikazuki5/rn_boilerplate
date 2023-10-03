/* eslint-disable react-native/no-inline-styles */
import { ToastComponentInterface } from 'interface/ToastComponentInterface';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';
import { Icon } from './Icon';

const ToastComponent = forwardRef(
  (
    {
      type = 'info',
      text,
      description,
      timeout = 1000,
    }: ToastComponentInterface,
    ref,
  ) => {
    const [isToastVisible, setIsToastVisible] = useState<boolean>(false);
    const showToast = () => {
      setIsToastVisible(true);
      const timer = setTimeout(() => {
        setIsToastVisible(false);
        clearTimeout(timer);
      }, timeout);
    };

    useImperativeHandle(ref, () => ({
      show: showToast,
    }));

    return (
      <>
        {isToastVisible ? (
          <Animated.View
            className="absolute top-[20px] w-[90%] min-h-[46px] p-3 flex-row bg-white rounded-2xl shadow-neutral-400 shadow-[0px_9px_30px] ml-4 mr-4"
            style={{ elevation: 5 }}
            entering={FadeInUp.delay(200)}
            exiting={FadeOutUp}>
            <View className="mt-1">
              <Icon name={type} size="30px" />
            </View>
            <View className="ml-2 w-[90%]">
              <Text
                className="text-black"
                style={{ fontWeight: '700', fontSize: 15 }}>
                {text}
              </Text>
              <Text style={{ color: '#7B8A8E', fontSize: 14 }}>
                {description}
              </Text>
            </View>
          </Animated.View>
        ) : null}
      </>
    );
  },
);

export default ToastComponent;
