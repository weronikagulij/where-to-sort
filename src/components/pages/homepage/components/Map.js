import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { mapStyle } from '../Homepage.style';
import { marginHorizontal, CARD_WIDTH } from '../Homepage.variables';
import { registerMap } from '../../../../redux/actions';

class Map extends Component {
  constructor() {
    super();

    this.handleOnMarkerPress = this.hadleOnMarkerPress.bind(this);
    this.handleRegisterMap = this.handleRegisterMap.bind(this);
    this.scrollView = null;
  }

  hadleOnMarkerPress(marker) {
    const { markers } = this.props;
    const currentIndex = markers.indexOf(marker);
    this.scrollView.getNode().scrollTo({ x: currentIndex * (CARD_WIDTH + marginHorizontal * 2) });
  }

  handleRegisterMap(mapView) {
    const { map } = this.props;
    if (map.map === null) this.props.registerMap({ ...map, mapView });

    this.map = mapView;
    this.scrollView = map.scrollView;
  }

  render() {
    const { region, markers } = this.props;

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
});

Map.propTypes = {
  region: PropTypes.objectOf(PropTypes.any).isRequired,
  markers: PropTypes.arrayOf(PropTypes.any).isRequired,
  map: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, { registerMap })(Map);
