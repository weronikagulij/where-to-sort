import React from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

import CustomHeader from '../../shared/customHeader/CustomHeader';
import Page from '../Page';

class About extends Page {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.navigation} />

        <Content>
          <Text>Add point works!</Text>
        </Content>
      </Container>
    );
  }
}

export default About;
