import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const marginHorizontal = 10;
const CARD_WIDTH = width - 80;

export { marginHorizontal, CARD_WIDTH };
