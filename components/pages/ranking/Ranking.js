import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

import CustomHeader from '@shared-components/CustomHeader/CustomHeader';

class Ranking extends Component {
    render() {
        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} />

                <Content>
                    <Text>Ranking works!</Text>
                </Content>
            </Container>
        );
    }
}

export default Ranking;
