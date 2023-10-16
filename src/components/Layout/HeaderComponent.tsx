import { Icon } from 'components/Icon';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

const HeaderComponent = ({ title, rightComponent, leftComponent }: Header) => {
  return (
    <View className="flex flex-row px-4 h-[42px] items-center w-[100%] mb-2">
      {leftComponent ? (
        <TouchableOpacity className="w-[42px] h-[42px] justify-center items-center border rounded-[50px] border-gray2">
          <Icon name="arrowLeft" color="transparent" size="22px" />
        </TouchableOpacity>
      ) : null}
      <View
        className={twMerge(
          'flex-1 justify-center items-center',
          leftComponent
            ? leftComponent && rightComponent
              ? 'pr-0'
              : 'pr-10'
            : rightComponent
            ? 'pl-10'
            : 'pl-0',
        )}>
        <Text className="font-extrabold text-[18px] text-ebony1 text">
          {title ?? 'Title'}
        </Text>
      </View>
      {rightComponent ? (
        <View className="w-[42px] h-[42px] justify-center items-center">
          {rightComponent}
        </View>
      ) : null}
    </View>
  );
};

export default HeaderComponent;
