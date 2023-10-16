import React, { useImperativeHandle, useState } from 'react';
import { ModalTypeRef } from 'types/modal';

export const useModalMessageBox = ({
  ref,
}: {
  ref: React.Ref<ModalTypeRef>;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsVisible(true);
  };

  useImperativeHandle(ref, () => ({
    show: showModal,
  }));

  return { isVisible, setIsVisible };
};
