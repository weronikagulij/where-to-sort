import React from 'react';
import { Container, Content, View } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import Page from '../Page';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { colorDark, colorTertiary } from '../../../shared-styles/Colors.style';
import WhTextInput from '../../shared/forms/wh-text-input/WhTextInput';
import { buttonFilled, buttonFilledText } from '../../../shared-styles/Button.style';
import WhText from '../../shared/wh-text/WhText';
import { createAccount, login } from '../../../api/mock';

class SignUp extends Page {
  createUser() {
    // login('test@test.ca', 'password')
    //   .then(() => {
    //     navigation.navigate('Homepage');
    //   })
    //   .catch((err) => console.log('error:', err.message));
    createAccount('test@test.ca', 'password')
      .then((val) => {
        this.navigation.navigate('Home');
      })
      .catch((err) => console.log('error:', err.message));
  }

  render() {
    return (
      <Container style={{padding: 30, height: '100%'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack(null)}
        >
          <Icon name="arrow-round-back" style={{fontSize: 35}}/>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center'}}>

        <WhText style={{fontSize: 30, fontWeight: '600', letterSpacing: 0.5, paddingBottom: 30, marginTop: -35}}>Dołącz do nas</WhText>

          <View>
            <View style={{paddingBottom: 20, paddingTop: 30}}>
              <WhTextInput label="E-mail"/>
            </View>
            <View style={{paddingBottom: 20}}>
              <WhTextInput label="Hasło" password={true}/>
            </View><View style={{paddingBottom: 30}}>
              <WhTextInput label="Powtórz hasło" password={true}/>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <TouchableOpacity
                style={[buttonFilled, {marginLeft: 5}]}
                onPress={this.createUser()}
              >
                <Text style={buttonFilledText}>Zarejestruj się</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, position: 'absolute', bottom: 0, width: '100%'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
              <WhText style={[{fontSize: 15, textDecorationLine: 'underline', fontWeight: '500'}, colorTertiary]}
                onPress={() => this.props.navigation.navigate('SignIn')}
              >Zaloguj się</WhText>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default (SignUp);
