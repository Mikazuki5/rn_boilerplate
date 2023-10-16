import * as React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twJoin } from 'tailwind-merge';
import HeaderComponent from './HeaderComponent';

const ContainerScreen = ({
  children,
  containerStyles,
  contentStyles,
  isShowHeader,
  headerTitle,
  leftComponent,
  rightComponent,
}: {
  children: React.ReactNode;
  containerStyles?: string;
  contentStyles?: string;
  isShowHeader?: boolean;
  headerTitle?: string;
  leftComponent?: boolean;
  rightComponent?: React.ReactElement;
}) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      className={twJoin("flex-1 bg-['#F4F5F6']", containerStyles)}
      style={{ paddingTop: inset.top }}>
      {isShowHeader ? (
        <HeaderComponent
          title={headerTitle}
          leftComponent={leftComponent}
          rightComponent={rightComponent}
        />
      ) : null}
      <View className={twJoin('flex-1', contentStyles)}>{children}</View>
    </View>
  );
};

export default ContainerScreen;
