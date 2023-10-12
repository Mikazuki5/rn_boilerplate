/* eslint-disable react-native/no-inline-styles */
import { Button } from 'components';
import { Icon, IconImage } from 'components/Icon';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { twJoin } from 'tailwind-merge';
import { ModalInteface, ModalTypeRef } from 'types/modal';

const ModalMessageBox = forwardRef(
  (
    {
      isImage,
      title,
      message,
      isBtnClosed,
      isBtnSubmit,
      isBtnCancel,
      onBtnSubmit,
    }: ModalInteface,
    ref: React.Ref<ModalTypeRef>,
  ) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const showModal = () => {
      setIsVisible(true);
    };

    useImperativeHandle(ref, () => ({
      show: showModal,
    }));

    return isVisible ? (
      <>
        <Animated.View
          className="absolute bg-transparent w-full h-screen justify-center items-center"
          entering={FadeIn}
          exiting={FadeOut}>
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: 'rgba(20, 23, 24, 0.5)', opacity: 1 },
            ]}
          />
          <View
            className=" w-[90%] min-h-[46px] p-6 bg-white rounded-2xl shadow-neutral-400 shadow-[0px_9px_30px]"
            style={{ elevation: 5 }}>
            {isBtnClosed ? (
              <TouchableOpacity
                className="items-end"
                onPress={() => setIsVisible(false)}>
                <Icon name="closeRounded" size="28px" />
              </TouchableOpacity>
            ) : null}

            {isImage ? (
              <View className="items-center mb-[31px]">
                <IconImage iconStyles="w-[230px] h-[190px]" name="logout" />
              </View>
            ) : null}

            <View className="items-center">
              <Text className="text-black mb-[7px] text-[16px] font-bold">
                {title}
              </Text>
              <Text className="text-gray font-normal text-[15px] text-center">
                {message}
              </Text>
            </View>

            <View
              className={twJoin(
                'mt-6 justify-between',
                isBtnSubmit && isBtnCancel && 'flex flex-row ',
              )}>
              {isBtnCancel ? (
                <Button
                  label="Kembali"
                  buttonStyles={twJoin(
                    'bg-transparent border-[0px]',
                    isBtnSubmit && 'w-[150px]',
                  )}
                  type="regular"
                  onPress={() => setIsVisible(false)}
                  textStyled="text-primary2"
                />
              ) : null}
              {isBtnSubmit ? (
                <Button
                  label="Submit"
                  buttonStyles={twJoin(isBtnCancel && 'w-[150px]')}
                  type="regular"
                  onPress={() => onBtnSubmit()}
                />
              ) : null}
            </View>
          </View>
        </Animated.View>
      </>
    ) : null;
  },
);

export default ModalMessageBox;
