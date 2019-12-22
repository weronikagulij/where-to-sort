import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

import CustomHeader from '@shared-components/CustomHeader/CustomHeader';

class AddPoint extends Component {
    render() {
        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} />

                <Content>
                    <Text>Add point works!</Text>
                </Content>
            </Container>
        );
    }
}

export default AddPoint;
