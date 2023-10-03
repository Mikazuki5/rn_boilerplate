import React from 'react';
import { IconInterfaceProps } from 'interface/IconInterface';
import { SvgProps } from 'react-native-svg';
import {
  DangerIcon,
  HomeIcon,
  InfoIcon,
  NewsPaperClipping,
  SuccessIcon,
  WarningIcon,
} from 'assets/icons';

export const Icon = ({
  name,
  color,
  size,
}: IconInterfaceProps): JSX.Element => {
  const svgIconProps: SvgProps = {
    fill: color || '#000',
    height: size || '18px',
    width: size || '18px',
  };

  const IconNames: Record<any, JSX.Element> = {
    home: <HomeIcon {...svgIconProps} />,
    newPaperClip: <NewsPaperClipping {...svgIconProps} />,
    info: <InfoIcon {...svgIconProps} />,
    danger: <DangerIcon {...svgIconProps} />,
    warning: <WarningIcon {...svgIconProps} />,
    success: <SuccessIcon {...svgIconProps} />,
  };

  return IconNames[name];
};
