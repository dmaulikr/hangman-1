import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      <TouchableHighlight
        onPress={handlePress}
        underlayColor='white'
        activeOpacity={0.7}
        >
        <View style={this.getStyles()}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
  },
});
