import React, { Component } from 'react';
import {
  Text, View, ScrollView, Image, Dimensions, TextInput as TInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

class WhText extends Component {
  render() {
    const weights = {
      '300': 'Light',
      '400': 'Regular',
      '500': 'Medium',
      '600': 'SemiBold',
      '700': 'Bold',
      '800': 'ExtraBold',
      '900': 'Black'
    };

    const { style, children } = this.props;
    let weight = 'Regular';

    (Array.isArray(style) ? style : [style]).forEach((s) => {
      if ( s?.fontWeight && weights[s?.fontWeight] ) {
        weight = weights[s?.fontWeight];
      }
    });

    return (
      <Text style={[{fontFamily: `Montserrat-${weight}`, fontSize: 18}, style]}>{children}</Text>
    );
  }
}

export default WhText;
