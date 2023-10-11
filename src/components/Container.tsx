import * as React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twJoin } from 'tailwind-merge';

const ContainerScreen = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      className={twJoin("flex-1 bg-['#F4F5F6']", className)}
      style={{ paddingTop: inset.top }}>
      {children}
    </View>
  );
};

export default ContainerScreen;
