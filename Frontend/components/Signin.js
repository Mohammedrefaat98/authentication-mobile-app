import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Textbox from './Toolboxes/Textbox';
import PasswordTextbox from './Toolboxes/PasswordTextbox';
import Button from './Toolboxes/Button';
import CheckBox from '@react-native-community/checkbox';
const axios = require('axios');

function Signin(props) {
  const {navigation} = props;
  var [visible, setVisible] = useState(true);
  function change() {
    setVisible(!visible);
  }
  const [isSelected, setSelection] = useState(false);
  var [Emailtext, setEmailtext] = useState('');
  var [Passwordtext, setPasswordtext] = useState('');
  var [err, setErr] = useState('');

  const Login = (Email, Password) => {
    setErr('logging In...');
    const body = {email: Email, password: Password};
    axios
      .post('https://smart-generator.herokuapp.com/api/users/login', body)
      .then(res => {
        if (res.status == 200) {
          setTimeout(() => {
            setErr('');
            navigation.navigate('OnBoarding', {screen: 'Onboarding1'});
          }, 500);
        }
      })
      .catch(error => {
        setErr(error.response.data.nouserfound);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.topText1}>Welcome, </Text>
        <Text style={styles.topText2}>Log in to get started!</Text>
      </View>

      <View style={styles.subContainer2}>
        <Textbox
          name={'Email'}
          onChangeText={Emailtext => setEmailtext(Emailtext)}
          defaultValue={Emailtext}
        />
      </View>

      <View style={styles.subContainer3}>
        <PasswordTextbox
          forgetButton={true}
          name={'Password'}
          secureTextEntry={visible}
          onChangeText={Passwordtext => setPasswordtext(Passwordtext)}
          defaultValue={Passwordtext}
          onPressIcon={change}
          onForget={() => navigation.navigate('ForgotPass')}
        />
      </View>

      <View style={styles.subContainer4}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.normalText}> Remember me </Text>
      </View>

      <View style={styles.subContainer5}>
        <Text style={styles.normalText}>{err}</Text>

        <Button
          onPress={() =>
            Login(Emailtext.replace(/\s/g, ''), Passwordtext.replace(/\s/g, ''))
          }
          title={'LOG IN'}
        />
        
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={[styles.bottomText,{
              color: '#AEB3C0'
            }]}>
            You have a account?
          </Text>
          
          <Text
            style={[styles.bottomText,{
              color: '#000000'
            }]}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            SIGN UP
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkbox: {
    borderColor: '#EBEBEB',
    width: 28,
    height: 28,
  },
  topText1: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 38,
    lineHeight: 45,
  },
  topText2: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 23.63,
    lineHeight: 25,
  },
  normalText: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#AEB3C0',
  },
  subContainer1: {
    top: 83,
    left: 26,
    width: 225,
    height: 71,
    position: 'absolute',
  },
  subContainer2: {
    top: 223,
    left: 28,
    position: 'absolute',
  },
  subContainer3: {
    top: 319,
    left: 28,
    position: 'absolute',
  },
  subContainer4: {
    top: 411,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
    flexDirection: 'row',
  },
  subContainer5: {
    top: 479,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
  },
  bottomText:{
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    alignSelf: 'auto',
    top: 24,
  }
});

export default Signin;
