import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { twJoin } from 'tailwind-merge';

const ButtonRegular = ({
  buttonStyles,
  onPress,
  title,
  textStyled,
}: {
  buttonStyles?: string;
  textStyled?: string;
  onPress: () => void;
  title: string;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twJoin(
        'w-full h-[42px] bg-primary2 items-center justify-center rounded-[10px] border border-primary',
        buttonStyles,
      )}>
      <Text className={twJoin('text-white', textStyled)}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonComponent = ({
  buttonStyles,
  type,
  btn_title,
  textStyled,
  onPress,
}: Button) => {
  const ButtonMapping: Record<BTN_TYPE, JSX.Element> = {
    regular: (
      <ButtonRegular
        title={btn_title ?? 'Button CTA'}
        textStyled={textStyled}
        buttonStyles={buttonStyles}
        onPress={onPress}
      />
    ),
  };
  return ButtonMapping[type];
};

export default ButtonComponent;
