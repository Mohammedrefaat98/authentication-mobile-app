import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default class PasswordTextbox extends Component {
  render() {
    if (this.props.forgetButton === true) {
      return (
        <View style={styles.Container}>
          <Text style={styles.label}>{this.props.name}</Text>
          <View style={styles.subContainer}>
            <TextInput
              secureTextEntry={this.props.secureTextEntry}
              style={styles.TextboxStyle}
              onChangeText={this.props.onChangeText}
              defaultValue={this.props.defaultValue}
            />
            <Icon
              style={styles.eyeIcon}
              name="eyeo"
              size={20}
              color="#000"
              onPress={this.props.onPressIcon}
            />
          </View>
          <Text style={styles.yourname1} onPress={this.props.onForget}>
            Forget Password?
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.Container}>
          <Text style={styles.label}>{this.props.name}</Text>
          <View style={styles.subContainer}>
            <TextInput
              secureTextEntry={this.props.secureTextEntry}
              style={styles.TextboxStyle}
              onChangeText={this.props.onChangeText}
              defaultValue={this.props.defaultValue}
            />
            <Icon
              style={styles.eyeIcon}
              name="eyeo"
              size={20}
              color="#000"
              onPress={this.props.onPressIcon}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  Container: {
    width: 319,
    height: 64,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: 319,
    height: 64,
    position: 'absolute',
    borderBottomWidth: 2,
    borderColor: '#EBEBEB',
  },
  label: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#AEB3C0',
  },
  TextboxStyle: {
    height: 39,
    width: 280,
    borderColor: '#EBEBEB',
  },
  eyeIcon: {
    padding: 10,
  },
  yourname1: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#AEB3C0',
    alignSelf: 'flex-end',
    top: 40,
  },
});
