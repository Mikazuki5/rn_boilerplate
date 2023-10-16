import React from 'react';
import { IconInterfaceProps } from 'interface/IconInterface';
import { SvgProps } from 'react-native-svg';
import {
  ArrowLeft,
  CloseButtonWithRound,
  CloseIcon,
  DangerIcon,
  HomeIcon,
  InfoIcon,
  NewsPaperClipping,
  SuccessIcon,
  WarningIcon,
} from 'assets/icons';
import { Images, Logout } from 'assets/images';
import { Image, ImageProps, View } from 'react-native';
import { IconImageType, IconType } from 'types/Icon';
import { twJoin } from 'tailwind-merge';

export const Icon = ({
  name,
  color,
  size,
}: IconInterfaceProps): JSX.Element => {
  const svgIconProps: SvgProps = {
    fill: color || '#000',
    height: size || '18px',
    width: size || '18px',
    color: '#ffff',
  };

  const IconNames: Record<IconType, JSX.Element> = {
    home: <HomeIcon {...svgIconProps} />,
    newPaperClip: <NewsPaperClipping {...svgIconProps} />,
    info: <InfoIcon {...svgIconProps} />,
    danger: <DangerIcon {...svgIconProps} />,
    warning: <WarningIcon {...svgIconProps} />,
    success: <SuccessIcon {...svgIconProps} />,
    close: <CloseIcon {...svgIconProps} />,
    logout: <Logout {...svgIconProps} />,
    closeRounded: <CloseButtonWithRound {...svgIconProps} />,
    arrowLeft: <ArrowLeft {...svgIconProps} />,
  };

  return IconNames[name];
};

export const IconImage = ({ name, iconStyles }: IconImageType) => {
  const IconNames: Record<string, ImageProps> = {
    logout: Images.logout,
  };
  return (
    <View>
      <Image
        className={twJoin('w-[382px] h-[204px]', iconStyles)}
        source={IconNames[name]}
      />
    </View>
  );
};
