import React from 'react';
import { Container, Content } from 'native-base';

import CustomHeader from '../../shared/customHeader/CustomHeader';
import Page from '../Page';
import SelectOption from './components/SelectOption';
import MapContainer from './components/MapContainer';

class Homepage extends Page {
  render() {
    return (
      <Container>
        <CustomHeader navigation={this.navigation} />

        <SelectOption />

        <Content style={{
          position: 'absolute',
          zIndex: -1,
        }}
        >
          <MapContainer />
        </Content>
      </Container>
    );
  }
}

export default Homepage;
