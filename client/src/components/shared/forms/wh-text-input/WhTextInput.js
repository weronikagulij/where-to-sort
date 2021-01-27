import React, { Component } from 'react';
import {
  Text, View, ScrollView, Image, Dimensions, TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

class WhTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    console.log(text)
    this.setState({value: text});
    // this.setState({value: event.target.value})
  }

  render() {
    const { label, password } = this.props;

    return (
      <View>
        <TextInput
          style={{height: 56, borderColor: '#C2C6C5', borderWidth: 1, borderRadius: 28, padding: 20}}
          placeholder={label}
          defaultValue=''
          secureTextEntry={password}
          value={this.state.value}
          onChangeText={(text) => this.handleChange(text)}
        />
      </View>
    );
  }
}

export default WhTextInput;
