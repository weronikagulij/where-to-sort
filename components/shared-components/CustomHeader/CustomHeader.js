import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon, Container, Content } from 'native-base';

class CustomHeader extends Component {
    render() {
        return (
            <Header>
                <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="md-menu"
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                    <Text>{this.props.navigation.state.key}</Text>
                </Left>
            </Header>
        );
    }
}

export default CustomHeader;
