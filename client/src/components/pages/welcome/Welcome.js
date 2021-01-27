import React from 'react';
import { Container, View } from 'native-base';
import { Text } from 'react-native';
import Page from '../Page';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { buttonFilled, buttonFilledText } from '../../../shared-styles/Button.style';
import { colorDark, colorLight, quatenary, secondary } from '../../../shared-styles/Colors.style';
import WhText from '../../shared/wh-text/WhText';

class Welcome extends Page {
  render() {
    return (
      <Container>
        <View style={{flex: 1}}></View>
        <View style={{ padding: 30}}>

          <WhText style={[{fontSize: 30, fontWeight: 'bold', letterSpacing: 1, fontWeight: '700', paddingBottom: 40}, colorDark]}>WHERE TO SORT</WhText>
          
          <View style={{flexDirection: 'row', paddingBottom: 24}}>
            <TouchableOpacity style={{width: 60, height: 15, borderRadius: 8, backgroundColor: secondary}}/>
            <TouchableOpacity style={{width: 30, height: 15, borderRadius: 8, backgroundColor: quatenary, marginLeft: 10}}/>
            <TouchableOpacity style={{width: 30, height: 15, borderRadius: 8, backgroundColor: quatenary, marginLeft: 10}}/>
          </View>

          <View style={{fontSize: 16, paddingBottom: 48}}>
            <WhText style={[{letterSpacing: 0.1, fontSize: 18, fontWeight: '400'}, colorLight]}>Chroń planetę i segreguj niecodzienne śmieci, takie jak elektronikę, baterie czy nakrętki zbierane na cele charytatywne.</WhText>
          </View>

          <View style={{paddingBottom: 16}}>
            <TouchableOpacity
              style={[buttonFilled, {marginLeft: 5}]}
              onPress={() => this.props.navigation.navigate('SignIn')}
            >
              <Text style={buttonFilledText}>Rozpocznij</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Container>
    );
  }
}

export default Welcome;
