export type ModalTypeRef = {
  show: any;
};

type ModalInteface = {
  isImage?: boolean;
  title: string;
  message: string;
  isBtnClosed?: boolean;
  isBtnSubmit?: boolean;
  isBtnCancel?: boolean;
  onBtnSubmit: () => void;
};
