import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Textbox from './Toolboxes/Textbox';
import PasswordTextbox from './Toolboxes/PasswordTextbox';
import Button from './Toolboxes/Button';
import CheckBox from '@react-native-community/checkbox';
const axios = require('axios');

function Signup(props) {
  //Signup  page
  const {navigation} = props; //react_navigation
  var [visible, setVisible] = useState(false);
  function change() {
    //for controlling the visibility of the password Input text
    setVisible(!visible);
  }
  const [isSelected, setSelection] = useState(false); //for controlling the visibility of the check mark in checkbox
  const [Nametext, setNametext] = useState(''); //for extracting Name
  const [Emailtext, setEmailtext] = useState(''); //for extracting Email
  const [Passwordtext, setPasswordtext] = useState(''); //for extracting Password
  const [err, setErr] = useState(''); // for showing errors in page

  const Register = (Name, Email, Password) => { //Registeration Method
    setErr('Signing Up...');
    const body = {name: Name, email: Email, password: Password};
    axios
      .post('https://smart-generator.herokuapp.com/api/users/signup', body)
      .then(res => {
        if (res.status == 200) {
          setTimeout(() => {
            setErr('');
            navigation.navigate('OnBoarding', {screen: 'Onboarding1'});
          }, 500);
        }
      })
      .catch(error => {
        setErr(error.response.data.error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.firsttext}>Welcome, </Text>
        <Text style={styles.lasttext}>Sign up to get started!</Text>
      </View>

      <View style={styles.subContainer2}>
        <Textbox
          name={'Your Name'}
          onChangeText={Nametext => setNametext(Nametext)}
          defaultValue={Nametext}
        />
      </View>

      <View style={styles.subContainer3}>
        <Textbox
          name={'Email'}
          onChangeText={Emailtext => setEmailtext(Emailtext)}
          defaultValue={Emailtext}
        />
        <Text style={[styles.normalText,{color: 'red'}]}> {err}</Text>
      </View>

      <View style={styles.subContainer4}>
        <PasswordTextbox
          name={'Password'}
          secureTextEntry={visible}
          onChangeText={Passwordtext => setPasswordtext(Passwordtext)}
          defaultValue={Passwordtext}
          onPressIcon={change}
        />
      </View>

      <View style={styles.subContainer5}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={[styles.normalText,{color: '#AEB3C0'}]}>Terms & Condistions </Text>
      </View>

      <View style={styles.subContainer6}>
        <Button
          onPress={() =>
            Register(
              Nametext,
              Emailtext.replace(/\s/g, ''),
              Passwordtext.replace(/\s/g, ''),
            )
          }
          title={'SIGN UP'}
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
            onPress={() => navigation.navigate('Signin')}>
            {' '}
            LOG IN
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
  firsttext: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 38,
    lineHeight: 45,
  },
  lasttext: {
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
    lineHeight: 24
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
    width: 319,
    height: 64,
    position: 'absolute',
  },
  subContainer3: {
    top: 319,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
  },
  subContainer4: {
    top: 415,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
  },
  subContainer5: {
    top: 507,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
    flexDirection: 'row',
  },
  subContainer6: {
    top: 584,
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

export default Signup;
