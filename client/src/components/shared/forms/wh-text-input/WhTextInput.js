import React, { Component } from 'react';
import {
  Text, View, ScrollView, Image, Dimensions, TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

class WhTextInput extends Component {
  render() {
    const { label, password } = this.props;

    return (
      <View>
        <TextInput
          style={{height: 56, borderColor: '#C2C6C5', borderWidth: 1, borderRadius: 28, padding: 20}}
          placeholder={label}
          defaultValue=''
          secureTextEntry={password}
        />
      </View>
    );
  }
}

export default WhTextInput;
