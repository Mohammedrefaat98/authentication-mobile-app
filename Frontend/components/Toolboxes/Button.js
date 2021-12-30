import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
export default class Textbox extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 319,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#545DFF',
    alignItems: 'baseline',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowColor: '#545DFF',
    shadowOpacity: 0.3,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    alignSelf: 'center',
    top: 16,
  },
});
