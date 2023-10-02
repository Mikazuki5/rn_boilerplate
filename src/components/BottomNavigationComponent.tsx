/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from './Icon';

const CircleButtonWithNavigationsCenter = () => {
  return (
    <TouchableOpacity className="bg-slate-300 min-w-[60px] min-h-[60px] bottom-5 items-center justify-center rounded-[50px]">
      <Icon name="home" size="35px" />
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
      {CircleButtonWithNavigationsCenter()}
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
