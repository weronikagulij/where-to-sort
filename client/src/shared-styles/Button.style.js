import { primary, quatenary, secondary, tertiary, white } from "./Colors.style";

const buttonDefault = {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  backgroundColor: white,
  overflow: 'hidden',
};

const sizeButtonDefault = {
  width: 54,
  height: 54,
  borderRadius: 27,
};

const buttonBordered = {
  height: 54,
  borderColor: primary,
  borderWidth: 2,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 27
}

const buttonBorderedText = {
  textTransform: 'uppercase',
  fontSize: 13,
  fontWeight: 'bold',
  color: primary
}

const buttonFilled = {
  height: 54,
  backgroundColor: tertiary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 27
}

const buttonFilledText = {
  fontSize: 16,
  fontFamily: 'Montserrat-Medium',
  letterSpacing: 0.4,
  color: white
}

export {
  buttonDefault,
  sizeButtonDefault,
  buttonBordered,
  buttonBorderedText,
  buttonFilled,
  buttonFilledText,
};
