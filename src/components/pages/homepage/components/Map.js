import React, { Component, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch, useSelector, connect } from 'react-redux';
import { mapStyle } from '../Homepage.style';
import { marginHorizontal, CARD_WIDTH } from '../Homepage.variables';
import { registerMap } from '../../../../redux/actions';


// to do: export map to redux

class Map extends Component {
  constructor() {
    super();

    this.handleOnMarkerPress = this.hadleOnMarkerPress.bind(this);
    this.handleRegisterMap = this.handleRegisterMap.bind(this);
    this.scrollView = null; // to do: import scrollView from redux
    // const counter = useSelector((state) => state.map);
  }

  componentDidMount() {
    // this.scrollView = this.props.map.scrollView;
  }

  hadleOnMarkerPress(marker) {
    const { markers } = this.props;
    // console.log(scrollView);
    const currentIndex = markers.indexOf(marker);
    this.scrollView.getNode().scrollTo({ x: currentIndex * (CARD_WIDTH + marginHorizontal * 2) });
  }

  handleRegisterMap(map) {
    // this.props.registerMap(map);
    if (this.props.map.map === null) this.props.registerMap({ ...this.props.map, map });

    this.map = map;
    this.scrollView = this.props.map.scrollView;
    // console.log(this.props.map.map);
  }

  render() {
    const { region, markers } = this.props;
    // console.log(this.props.registerMap);
    // console.log(this.props, 'kupsko');
    // const dispatch = useDispatch();
    // const mappy = useSelector((state) => state.map);
    // dispatch(registerMap({ uu: 'uuu' })); console.log(mappy);

    // const handleChange = useCallback(() => dispatch(registerMap({ uu: 'uuu' }), [dispatch]));
    return (
      <MapView
        ref={(map) => this.handleRegisterMap(map)}
        style={mapStyle.mapStyle}
        initialRegion={region}
        region={region}
      >
        <MapView.Marker
          title="Twoja lokalizacja"
          coordinate={{
            longitude: region.longitude,
            latitude: region.latitude,
          }}
        >
          <Image source={require('../../../../assets/geolocation.png')} style={{ height: 24, width: 24 }} />
        </MapView.Marker>
        {markers.map((marker) => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinate}
            onPress={() => this.handleOnMarkerPress(marker)}
          />
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
  // scrollView: state.scrollView,
  // loggedUser: state.loggedUser,
});

Map.propTypes = {
  region: PropTypes.objectOf(PropTypes.any).isRequired,
  markers: PropTypes.arrayOf(PropTypes.any).isRequired,
  scrollView: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, { registerMap })(Map);
