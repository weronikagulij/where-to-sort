import React, { Component } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector, connect } from 'react-redux';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { mapStyle } from '../Homepage.style';
import Map from './Map';
import AnimatedScrollView from './AnimatedScrollView';
import LocalizeButton from './LocalizeButton';

class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          coordinate: {
            latitude: 52.4385809,
            longitude: 16.8337559,
          },
          title: 'Best Place',
          description: 'This is the best place in Portland',
          id: 1,
          verified: true,
        },
        {
          coordinate: {
            latitude: 52.4385809,
            longitude: 16.8637559,
          },
          title: 'Second Best Place',
          description: 'This is the second best place in Portland',
          id: 2,
          verified: true,
        },
        {
          coordinate: {
            latitude: 52.4485809,
            longitude: 16.8337559,
          },
          title: 'Third Best Place',
          description: 'This is the third best place in Portland',
          id: 3,
          verified: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.getLocationAsync();
    // console.log(this.props.map);
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});

      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      throw new Error('Location permission not granted');
    }
  }

  recenterMap() {
    console.log('recenter');
    // const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.location;
    // this.map.animateToRegion({
    //   latitude,
    //   longitude,
    //   latitudeDelta,
    //   longitudeDelta
    // })
  }

  render() {
    const { region, markers } = this.state;

    return (
      <View style={mapStyle.container}>
        <Map region={region} markers={markers} />
        <View style={mapStyle.scrollAndButtonsWrapper}>
          <LocalizeButton locate={this.recenterMap} />
          <AnimatedScrollView region={region} markers={markers} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
  scrollView: state.scrollView,
});


export default connect(mapStateToProps)(MapContainer);
