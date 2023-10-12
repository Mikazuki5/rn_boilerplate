type BTN_TYPE = 'regular';
type Button = {
  buttonStyles?: string;
  type: BTN_TYPE;
  label?: string;
  onPress: () => void;
  textStyled?: string;
};
