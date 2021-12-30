import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Textbox from './Toolboxes/Textbox';
import Button from './Toolboxes/Button';

function ForgotPass(props) {
  const {navigation} = props;
  const [Emailtext, setEmailtext] = useState('');
  return (
    <View style={styles.container}>
      
      <Icon
        style={styles.searchIcon}
        name="arrowleft"
        size={30}
        color="#000"
        onPress={() => navigation.navigate('Signin')}
      />

      <View style={styles.subContainer1}>
        <Text style={styles.firsttext}>Forgot </Text>

        <Text style={styles.firsttext}>Password?</Text>
      </View>

      <View style={styles.subContainer2}>
        <Textbox
          name={'Email'}
          onChangeText={Emailtext => setEmailtext(Emailtext)}
          defaultValue={Emailtext}
        />
      </View>

      <View style={styles.subContainer3}>
        <Button title={'RESET PASSWORD'} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firsttext: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 38,
    lineHeight: 45,
  },
  searchIcon: {
    top: 73,
    left: 20,
  },
  subContainer1: {
    top: 138,
    left: 26,
    width: 225,
    height: 71,
    position: 'absolute',
  },
  subContainer2: {
    top: 268,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
  },
  subContainer3: {
    top: 441,
    left: 28,
    width: 319,
    height: 64,
    position: 'absolute',
  },
});

export default ForgotPass;
