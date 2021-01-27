import React from 'react';
import { Container, Content, View } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import Page from '../Page';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { colorDark, colorPrimary, colorQuatenary, colorTertiary } from '../../../shared-styles/Colors.style';
import { buttonBordered, buttonBorderedText, buttonFilled, buttonFilledText } from '../../../shared-styles/Button.style';
import WhTextInput from '../../shared/forms/wh-text-input/WhTextInput';
import WhText from '../../shared/wh-text/WhText';
import { login } from '../../../api/mock';
import { connect } from 'react-redux';
import { continueWithoutLogin } from '../../../redux/actions/userActions';

class SignIn extends Page {
  constructor(navigation) {
    super(navigation);

    this.state = {
      loginForm: {
        email: '',
        password: ''
      }
    }

    this.continueWithoutLoggingIn = this.continueWithoutLoggingIn.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  loginUser() {
    // login('test@test.ca', 'password')
    //   // .then(async (res) => {
    //   //   await setToken(res.auth_token);
    //   //   navigation.navigate('Homepage');
    //   // })
    //   .then((res) => {
    //     // this.props.saveUser()
    //     // await setToken(res.auth_token);
    //     // navigation.navigate('Homepage');
    //   })
    //   .catch((err) => console.log('error:', err.message));
  }

  changeEmail() {
    console.log('email changed')
  }

  changePassword() {

  }

  continueWithoutLoggingIn() {
    console.log('continue')
    this.props.continueWithoutLoggingIn();
    this.props.navigation.navigate('Homepage');
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

          <WhText style={{fontSize: 30, fontWeight: '600', letterSpacing: 0.5, paddingBottom: 64, marginTop: -35}}>Zaloguj się</WhText>

          <View style={{}}>
            <View style={{paddingBottom: 24}}>
              <WhTextInput
                label="E-mail"
                // value={this.state.loginForm.email}
                // onChange={this.changeEmail}
              />
            </View>
            <View style={{paddingBottom: 32}}>
              <WhTextInput
                label="Hasło"
                password={true}
                // value={this.state.loginForm.password}
              />
            </View>
            <View style={{}}>
              <TouchableOpacity
                style={[buttonFilled, {marginLeft: 5}]}
                onPress={() => this.login()}
              >
                <Text style={buttonFilledText}>Zaloguj się</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => this.continueWithoutLoggingIn()} style={{flexDirection: 'row', alignItems: 'center', paddingTop: 32, justifyContent: 'center'}}>
            <WhText style={{marginRight: 10, fontSize: 15}}>Kontynuuj bez logowania</WhText>
            <Icon name="arrow-forward" style={{fontSize: 15}}/>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, position: 'absolute', bottom: 0, width: '100%'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <WhText style={[{fontSize: 15, textDecorationLine: 'underline', fontWeight: '500'}, colorTertiary]}>Zarejestruj się</WhText>
            </TouchableOpacity>

            <TouchableOpacity>
              <WhText style={[{fontSize: 15, textDecorationLine: 'underline', fontWeight: '500'}, colorTertiary]}>Zapomniałeś hasła?</WhText>
            </TouchableOpacity>
          </View>

        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: value => { dispatch(signInUser(value)); },
    continueWithoutLoggingIn: () => { dispatch(continueWithoutLogin()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
