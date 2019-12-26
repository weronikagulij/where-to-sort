import React, { Component } from 'react';
import { View } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { mapStyle } from '../Homepage.style';
import Map from './Map';
import AnimatedScrollView from './AnimatedScrollView';
import LocalizeButton from './LocalizeButton';

class MapContainer extends Component {
  constructor() {
    super();

    // this.index = 0;
    // this.animation = new Animated.Value(0);
    // this.handleOnMarkerPress = this.hadleOnMarkerPress.bind(this);

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
    // const { markers, region } = this.state;

    // this.animation.addListener(({ value }) => {
    //   let index = Math.floor(value / CARD_WIDTH + 0.3);
    //   if (index >= markers.length) {
    //     index = markers.length - 1;
    //   }
    //   if (index <= 0) {
    //     index = 0;
    //   }

    //   clearTimeout(this.regionTimeout);
    //   this.regionTimeout = setTimeout(() => {
    //     if (this.index !== index) {
    //       this.index = index;
    //       const { coordinate } = markers[index];
    //       this.map.animateToRegion(
    //         {
    //           ...coordinate,
    //           latitudeDelta: region.latitudeDelta,
    //           longitudeDelta: region.longitudeDelta,
    //         },
    //         350,
    //       );
    //     }
    //   }, 10);
    // });

    this.getLocationAsync();
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
  }
  // hadleOnMarkerPress(marker) {
  //   const { markers } = this.state;
  //   const currentIndex = markers.indexOf(marker);
  //   this.scrollView.getNode().scrollTo(
  //     { x: currentIndex * (CARD_WIDTH + marginHorizontal * 2) });
  // }

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

export default MapContainer;
