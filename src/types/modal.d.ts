export type ModalTypeRef = {
  show: any;
};

type ModalInteface = {
  isImage?: boolean;
  title: string;
  message: string;
  isSingleActionBtn?: boolean;
  isBtnClosed?: boolean;
  isBtnSubmit?: boolean;
  isBtnCancel?: boolean;
  onBtnSubmit: () => void;
};
