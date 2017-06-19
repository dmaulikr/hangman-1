import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button from './Button';

const ROW_ONE = 'qwertyuiop'.split('');
const ROW_TWO = 'asdfghjkl'.split('');
const ROW_THREE = 'zxcvbnm'.split('');

export default class Keyboard extends Component {
  handlePress = (letter, disabled) => () => {
    if (!disabled) this.props.handleLetterPress(letter)
  }

  getButton = (letter) => {
    const disabled = this.props.guesses.includes(letter);
    return (
      <Button
        text={letter}
        handlePress={this.handlePress(letter, disabled)}
        disabled={disabled}
      />
    );
  }

  getRow = (row) => (
    <View style={styles.letterRow} key={row.join('')}>
      {row.map(this.getButton)}
    </View>
  )

  render() {
    return (
      <View style={styles.keyboard}>
        {[ROW_ONE, ROW_TWO, ROW_THREE].map(this.getRow)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 3,
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
