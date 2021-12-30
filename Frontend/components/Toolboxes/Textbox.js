import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
export default class Textbox extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.label}>{this.props.name}</Text>
        <TextInput
          style={styles.TextboxStyle}
          onChangeText={this.props.onChangeText}
          defaultValue={this.props.defaultValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TextboxStyle: {
    height: 39,
    width: 319,
    borderColor: '#EBEBEB',
    borderBottomWidth: 2,
  },
  Container: {
    width: 319,
    height: 64,
  },
  label: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#AEB3C0',
  },
});
