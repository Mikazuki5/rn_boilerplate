type BTN_TYPE = 'regular';
type Button = {
  buttonStyles?: string;
  type: BTN_TYPE;
  btn_title?: string;
  onPress: () => void;
  textStyled?: string;
};
