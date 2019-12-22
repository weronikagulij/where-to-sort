import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

import CustomHeader from '../../shared/customHeader/CustomHeader';
import Page from '../Page';

class Homepage extends Page {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.navigation} />

        <Content>
          <Text>Homepage works!</Text>
        </Content>
      </Container>
    );
  }
}

export default Homepage;
