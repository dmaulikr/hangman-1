import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends PureComponent {

  getStyles = () => ({
    width: this.props.style.width || null,
    height: this.props.style.height || null,
    borderRadius: 5,
    padding: 5,
    margin: this.props.style.margin || 1,
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
    const { disabled, text, handlePress } = this.props;
    return (
      <TouchableOpacity onPress={handlePress}>
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
  },
});
