import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faMapMarkedAlt,
    faPlus,
    faTrophy,
    faInfo
} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-navigation';

const { width } = (Dimensions.get('window') / 2) * 3;

class Sidebar extends Component {
    navigate(route) {
        this.props.navigation.navigate(route);
    }

    render() {
        const routes = [
            {
                title: 'Mapa',
                navigate: 'Homepage',
                icon: faMapMarkedAlt
            },
            {
                title: 'Dodaj punkt',
                navigate: 'AddPoint',
                icon: faPlus
            },
            {
                title: 'Ranking',
                navigate: 'Ranking',
                icon: faTrophy
            },
            {
                title: 'O aplikacji',
                navigate: 'About',
                icon: faInfo
            }
        ];

        const menuItems = routes.map((e, i) => (
            <TouchableOpacity
                onPress={_ => this.navigate(e.navigate)}
                style={{
                    flexDirection: 'row',
                    paddingVertical: 15,
                    paddingHorizontal: 20
                }}
            >
                <FontAwesomeIcon
                    icon={e.icon}
                    style={{ marginRight: 20, color: '#fff', opacity: 0.6 }}
                />
                <Text style={{ opacity: 0.6, color: '#fff' }}>{e.title}</Text>
            </TouchableOpacity>
        ));

        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: '#317174', width: width }}
            >
                <View>
                    <View style={{ width: '100%', height: 200 }}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            fontSize: 20,
                            color: '#fff',
                            opacity: 0.8
                        }}
                    >
                        Segreguj odpady
                    </Text>
                </View>
                <ScrollView>{menuItems}</ScrollView>
                <View
                    style={{
                        alignItems: 'center',
                        bottom: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View>
                        <Text
                            style={{
                                opacity: 0.6,
                                color: '#fff',
                                marginRight: 20
                            }}
                        >
                            Ustawienia
                        </Text>
                    </View>
                    <View>
                        <Text style={{ opacity: 0.6, color: '#fff' }}>
                            Wyloguj
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Sidebar;
