import React from 'react';
import { Container, Content, Icon, View } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import Page from '../Page';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import { buttonFilled, buttonFilledText } from '../../../shared-styles/Button.style';
import { colorDark, colorLight, quatenary, secondary } from '../../../shared-styles/Colors.style';
import WhText from '../../shared/wh-text/WhText';
import { BoxShadow } from 'react-native-shadow';
import { shadowButton, shadowButtonSize } from '../../../shared-styles/Shadow.style';
import { connect } from 'react-redux';
import { signInUser } from '../../../redux/actions/userActions';

// const thunk = ReduxThunk.default;

class Welcome extends Page {
  componentDidMount() {
    // this.props.myFunc({ id: 'new 2', token: 'new token 2' })
  }

  render() {
    console.log(this.props)
    // this.props.myFunc({ id: 'new 2', token: 'new token 2' })
    // this.props.user.dispatch(signInUser({ id: 'new 2', token: 'new token 2' }))
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: value => { dispatch(signInUser(value))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
