import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const marginHorizontal = 10;

const CARD_WIDTH = width - 80;

const selectContainer = {
  style: {
    position: 'absolute',
    top: 30,
    right: 25,
  },
};

const selectContent = {
  height: 54, width: 200, backgroundColor: '#fff', borderRadius: 27, overflow: 'hidden', paddingLeft: 10,
};

const mapStyle = {
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scrollAndButtonsWrapper: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
  localizeButton: {
    position: 'relative',
    bottom: 5,
    zIndex: 1,
    flex: 1,
    alignItems: 'flex-end',
  },
  scrollView: {
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
    paddingLeft: (width - CARD_WIDTH - (marginHorizontal * 2)) / 2,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2E3532',
    marginVertical: 2,
  },
  cardDescription: {
    fontSize: 14,
    color: '#A0A9A1',
  },
  cardVerified: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#A0A9A1',
    opacity: 0.65,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
};

export { selectContainer, mapStyle, selectContent };
