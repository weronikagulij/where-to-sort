import React from 'react';
import { Container, Content, View } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import Page from '../Page';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Page {
  render() {
    return (
      <Container>
        <View style={{backgroundColor: '#2e3532', flex: 1}}>
        </View>
        <View style={{height: 300, borderTopRightRadius: 50, borderTopLeftRadius: 50, marginTop: -50, backgroundColor: '#fff', padding: 30}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 1, color: '#2e3532'}}>Segreguj{"\n"}odpady</Text>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#a0a9a1'}}>Znajdź miejsce w twoim mieście, gdzie możesz oddać niecodzienne śmieci, takie jak elektronikę, baterie czy nakrętki zbierane na cele charytatywne.</Text>
          </View>
          <View style={{ flexDirection:'column', justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:0.5}}>
                <TouchableOpacity style={{height: 48, borderColor: '#317174', borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 24, marginRight: 5}}>
                  <Text style={{textTransform: 'uppercase', fontSize: 13, fontWeight: 'bold', color: '#317174'}}>Zaloguj się</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:0.5}}>
              <TouchableOpacity style={{height: 48, backgroundColor: '#317174', alignItems: 'center', justifyContent: 'center', borderRadius: 24, marginLeft: 5}}>
                  <Text style={{textTransform: 'uppercase', fontSize: 13, fontWeight: 'bold', color: '#fffffa'}}>Zarejestruj się</Text>
                </TouchableOpacity>
              </View> 
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default (Login);
