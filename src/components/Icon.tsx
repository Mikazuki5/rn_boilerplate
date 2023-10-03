import React from 'react';
import { IconInterfaceProps } from 'interface/IconInterface';
import { SvgProps } from 'react-native-svg';
import { IconType } from 'types/Icon';
import { HomeIcon, NewsPaperClipping } from 'assets/icons';

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

  const IconNames: Record<IconType, JSX.Element> = {
    home: <HomeIcon {...svgIconProps} />,
    newPaperClip: <NewsPaperClipping {...svgIconProps} />,
  };

  return IconNames[name];
};
