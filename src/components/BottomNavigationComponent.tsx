/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from './Icon';
import LinearGradient from 'react-native-linear-gradient';
import { CircleButtonWithNavigationsCenterInterface } from 'interface/BottomNavigationInterface';

const CircleButtonWithNavigationsCenter = ({
  start,
  end,
  colors,
}: CircleButtonWithNavigationsCenterInterface) => {
  const configLinearGradient: CircleButtonWithNavigationsCenterInterface = {
    start: start || { x: 1, y: 0.5 },
    end: end || { x: 0, y: 0.5 },
    colors: colors || ['#FF7C00', '#FFCB49'],
  };

  return (
    <TouchableOpacity className="min-w-[60px] min-h-[60px] bottom-5 rounded-[50px]">
      <LinearGradient
        className="min-w-[60px] min-h-[60px] rounded-[50px] items-center justify-center"
        start={configLinearGradient.start}
        end={configLinearGradient.end}
        colors={configLinearGradient.colors}>
        <Icon name="newPaperClip" size="35px" color="transparent" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const BottomNavigationComponent = () => {
  return (
    <View
      className="absolute bottom-10 ml-4 mr-4 bg-white w-[90%] h-[8%] pl-4 pr-4 justify-between rounded-2xl shadow-neutral-400 shadow-[0px_9px_30px] flex-row self-center items-center content-centers"
      style={{ elevation: 5 }}>
      <TouchableOpacity className="items-center">
        <Icon name="home" size="35px" />
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Icon name="home" size="35px" />
      </TouchableOpacity>
      {CircleButtonWithNavigationsCenter({ colors: ['#FF7C00', '#FFCB49'] })}
      <TouchableOpacity className="items-center">
        <Icon name="home" size="35px" />
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Icon name="home" size="35px" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationComponent;
