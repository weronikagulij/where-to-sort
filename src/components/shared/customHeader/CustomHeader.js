import React from 'react';

import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { BoxShadow } from 'react-native-shadow';
import {
  Icon,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { sizeButtonDefault, buttonDefault } from '../../../shared-styles/Button.style';
import { shadowButton, shadowButtonSize } from '../../../shared-styles/Shadow.style';
import { colorPrimary } from '../../../shared-styles/Colors.style';

const CustomHeader = (props) => {
  const { navigation } = props;
  return (
    <Header containerStyle={{
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      paddingLeft: 25,
    }}
    >
      <BoxShadow setting={{ ...shadowButton, ...shadowButtonSize }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={[buttonDefault, sizeButtonDefault]}
        >
          <Icon
            style={colorPrimary}
            name="md-menu"
          />
        </TouchableOpacity>
      </BoxShadow>
    </Header>
  );
};

CustomHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomHeader;
