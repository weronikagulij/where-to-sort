import React, { Component } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector, connect } from 'react-redux';
import Emitter from 'tiny-emitter';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { mapStyle } from '../Homepage.style';
import Map from './Map';
import AnimatedScrollView from './AnimatedScrollView';
import LocalizeButton from './LocalizeButton';

class MapContainer extends Component {
  constructor() {
    super();

    this.emitter = new Emitter();
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
            latitude: 52.404563,
            longitude: 16.934996,
          },
          title: 'Zielona 2, Poznań',
          description: 'Zbiór nakrętek na cele charytatywne',
          id: 1,
          verified: true,
        },
        {
          coordinate: {
            latitude: 52.406503,
            longitude: 16.937811,
          },
          title: 'Garbary 28, Poznań',
          description: 'Punkt zbioru baterii',
          id: 2,
          verified: true,
        },
        {
          coordinate: {
            latitude: 52.405720,
            longitude: 16.938725,
          },
          title: 'Mostowa 7, Poznań',
          description: 'Punkt zbioru urządzeń elektrycznych',
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
        <Map region={region} markers={markers} emitter={this.emitter} />
        <View style={mapStyle.scrollAndButtonsWrapper}>
          <LocalizeButton locate={this.recenterMap} emitter={this.emitter} />
          <AnimatedScrollView region={region} markers={markers} emitter={this.emitter} />
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
