import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { mapStyle } from '../Homepage.style';

class Map extends Component {
  constructor() {
    super();
    this.handleOnMarkerPress = this.hadleOnMarkerPress.bind(this);
  }

  componentDidMount() {
    const { emitter } = this.props;

    emitter.on('animate-map-to', this.animateTo, this);
  }

  hadleOnMarkerPress(marker) {
    const { markers, emitter } = this.props;
    const currentIndex = markers.indexOf(marker);

    emitter.emit('scroll-scrollview-to', currentIndex);
  }

  animateTo(coordinates) {
    this.map.animateToRegion(coordinates, 350);
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

// const mapStateToProps = (state) => ({
//   map: state.map,
// });

Map.propTypes = {
  region: PropTypes.objectOf(PropTypes.any).isRequired,
  markers: PropTypes.arrayOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default
// connect(mapStateToProps, { registerMap }, null, { forwardRef: true })(
Map;
// );
