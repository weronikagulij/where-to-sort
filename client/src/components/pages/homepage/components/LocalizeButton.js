import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { sizeButtonDefault, buttonDefault } from '../../../../shared-styles/Button.style';
import { shadowButton, shadowButtonSize } from '../../../../shared-styles/Shadow.style';
import { colorPrimary } from '../../../../shared-styles/Colors.style';
import { marginRight } from '../../../../shared-styles/Margins.style';
import { mapStyle } from '../Homepage.style';

class LocalizeButton extends Component {
  constructor() {
    super();
    this.handleGeolocationButton = this.handleGeolocationButton.bind(this);
  }

  handleGeolocationButton() {
    // this.props.emitter.emit('recenter-map');
  }

  render() {
    return (
      <View style={[mapStyle.localizeButton, marginRight]}>
        <BoxShadow
          setting={{ ...shadowButton, ...shadowButtonSize }}
        >
          <TouchableOpacity
            onPress={() => this.handleGeolocationButton()}
            style={[buttonDefault, sizeButtonDefault]}
          >
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={colorPrimary}
            />
          </TouchableOpacity>
        </BoxShadow>
      </View>
    );
  }
}

export default LocalizeButton;
