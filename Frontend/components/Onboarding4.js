import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './Toolboxes/Button'
import StrokeDashArrayCircle from './Toolboxes/StrokeDashArrayCircle'
function Onboarding4(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.text}>Sustainable</Text>
      </View>

      <View style={styles.container1}>
        <StrokeDashArrayCircle/>
        <View style={styles.countContainer1}>
          <Text style={styles.text1}>min</Text>
          <Text style={styles.text2}>30</Text>
          <Text style={styles.text3}>Room 456</Text>
          <Text style={styles.text4}>North Building</Text>
        </View>
      </View>

      <View style={styles.countContainer2}>
        <Text style={styles.text5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vulputate purus mi, eget rhoncus ligula vehicula eget.{' '}
        </Text>

        <View style={styles.button}>
          <Button
            title={'Get Started'}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  button: {
    top: 30
  },
  text: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 38,
    lineHeight: 45,
  },
  text1: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 23,
    color: '#3B4664',
  },
  text2: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 90,
    lineHeight: 95,
    color: '#3B4664',
  },
  text3: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 25,
    color: '#3B4664',
  },
  text4: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 10,
    lineHeight: 10,
    color: '#3B4664',
  },
  text5: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    color: '#AEB3C0',
    width: 319,
  },
  countContainer: {
    top: 53,
    left: 26,
    width: 225,
    height: 71,
    position: 'absolute',
  },
  countContainer1: {
    width: 319,
    height: 84,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer2: {
    top: 537,
    width: 319,
    height: 82,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Onboarding4;
