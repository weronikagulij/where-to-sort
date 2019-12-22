import React from 'react';

import { Text } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

import {
  Left, Icon,
} from 'native-base';


const CustomHeader = (props) => {
  const { navigation } = props;
  return (
    <Header>
      <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="md-menu"
          onPress={() => navigation.openDrawer()}
        />
        <Text>{navigation.state.key}</Text>
      </Left>
    </Header>
  );
};

CustomHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomHeader;
