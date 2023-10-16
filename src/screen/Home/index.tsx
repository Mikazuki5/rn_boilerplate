import {
  BottomNavigationComponent,
  Container,
  ModalBottomSheetComponent,
  ModalMessageBox,
  ToastComponent,
} from 'components';
import React, { useRef } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { ModalTypeRef } from 'types/modal';

const HomeScreenContainer = () => {
  const toastRef = useRef<any>(null);
  const modalBottomSheetRef = useRef<any>(null);
  const modalMessageBoxRef = useRef<ModalTypeRef>(null);

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  const handleShowModaBottomSheet = () => {
    if (modalBottomSheetRef.current) {
      modalBottomSheetRef.current.show();
    }
  };

  const handleShowModalMessageBox = () => {
    if (modalMessageBoxRef.current) {
      modalMessageBoxRef.current.show();
    }
  };

  return (
    <>
      <Container
        contentStyles="px-4"
        isShowHeader
        headerTitle="Home Screen"
        leftComponent
        rightComponent={
          <TouchableOpacity>
            <Text>Icon2</Text>
          </TouchableOpacity>
        }>
        <Text className="text-black">Ini Home</Text>
        <TouchableOpacity onPress={() => handleShowToast()}>
          <Text className="text-black">Ini Button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShowModaBottomSheet()}>
          <Text className="text-black">Ini Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShowModalMessageBox()}>
          <Text className="text-black">Ini Modal Message</Text>
        </TouchableOpacity>
      </Container>
      <ToastComponent
        type="success"
        text="This is a success toast message!"
        description="This is description text"
        timeout={2000}
        ref={toastRef}
      />
      <BottomNavigationComponent />
      <ModalMessageBox
        ref={modalMessageBoxRef}
        title="Tetap ingin keluar dari Akunmu?"
        message="Kamu perlu Masuk lagi untuk kembali menggunakan Layanan Shipdeo."
        isImage
        isBtnClosed
        isBtnSubmit
        isBtnCancel
        onBtnSubmit={() => Alert.alert('Modal Active')}
      />
      <ModalBottomSheetComponent ref={modalBottomSheetRef} />
    </>
  );
};

export default HomeScreenContainer;
