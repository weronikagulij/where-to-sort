import React, { Component } from 'react';
import {
  Text, View, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, connect } from 'react-redux';

import { mapStyle } from '../Homepage.style';
import { marginHorizontal, CARD_WIDTH } from '../Homepage.variables';
import { registerScrollView } from '../../../../redux/actions';

// to do: export scrollView to redux

class AnimatedScrollView extends Component {
  constructor() {
    super();
    this.index = 0;
    this.animation = new Animated.Value(0);

    this.handleRegisterScrollView = this.handleRegisterScrollView.bind(this);
  }

  componentDidMount() {
    const { markers, region } = this.props;
    // this.map = map;
    // console.log(this.props.map.scrollView);

    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= markers.length) {
        index = markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }

  handleRegisterScrollView(view) {
    // this.props.registerMap(map);
    // console.log('dsdsdsd', this.props.map.scrollView);
    if (this.props.map.scrollView === null) this.props.registerScrollView({ ...this.props.map, scrollView: view });

    this.scrollView = view;
    this.map = this.props.map.map;
    // console.log(this.props.map.);
  }

  render() {
    const { markers } = this.props;
    return (
      <Animated.ScrollView
        horizontal
        ref={(view) => this.handleRegisterScrollView(view)}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + marginHorizontal * 2}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: this.animation,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
        style={mapStyle.scrollView}
        contentContainerStyle={mapStyle.endPadding}
      >
        {markers.map((marker) => (
          <View style={mapStyle.card} key={marker.id}>
            <View style={mapStyle.textContent}>
              <Text style={mapStyle.cardVerified}>{marker.verified === true ? 'Zweryfikowano' : 'Nie zweryfikowano'}</Text>
              <Text style={mapStyle.cardtitle}>{marker.title}</Text>
              <Text style={mapStyle.cardDescription}>
                {marker.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  map: state.map,
  // scrollView: state.scrollView,
  // loggedUser: state.loggedUser,
});

AnimatedScrollView.propTypes = {
  region: PropTypes.objectOf(PropTypes.any).isRequired,
  markers: PropTypes.arrayOf(PropTypes.any).isRequired,
  map: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, { registerScrollView })(AnimatedScrollView);
