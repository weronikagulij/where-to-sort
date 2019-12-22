import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Left, Right, Icon, Container, Content } from 'native-base';

import CustomHeader from '@shared-components/CustomHeader/CustomHeader';

class Homepage extends Component {
    render() {
        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} />

                <Content>
                    <Text>Homepage works!</Text>
                </Content>
            </Container>
        );
    }
}

export default Homepage;
