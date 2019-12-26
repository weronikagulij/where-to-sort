import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { mapStyle } from '../Homepage.style';
import { marginHorizontal, CARD_WIDTH } from '../Homepage.variables';

// to do: export map to redux

class Map extends Component {
  constructor() {
    super();

    this.handleOnMarkerPress = this.hadleOnMarkerPress.bind(this);
    this.scrollView = null; // to do: import scrollView from redux
  }

  hadleOnMarkerPress(marker) {
    const { markers } = this.props;
    const currentIndex = markers.indexOf(marker);
    this.scrollView.getNode().scrollTo({ x: currentIndex * (CARD_WIDTH + marginHorizontal * 2) });
  }

  render() {
    const { region, markers } = this.props;
    return (
      <MapView
        ref={(map) => { this.map = map; }}
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

Map.propTypes = {
  region: PropTypes.objectOf(PropTypes.any).isRequired,
  markers: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Map;
