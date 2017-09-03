import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends PureComponent {

  getStyles = () => ({
    borderRadius: 5,
    padding: 8,
    margin: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    backgroundColor: this.props.disabled ? '#3ec6cd' : '#2E9298',
  })

  render() {
    const { disabled, text, handlePress, style } = this.props;
    return (
      <TouchableOpacity onPress={handlePress} style={style}>
        <View style={this.getStyles()}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 3,
  },
});
