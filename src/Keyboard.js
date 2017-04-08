import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ROW_ONE = 'qwertyuiop'.split('');
const ROW_TWO = 'asdfghjkl'.split('');
const ROW_THREE = 'zxcvbnm'.split('');

export default class Keyboard extends Component {
  handlePress = (letter) => {
    if (this.props.enabled) this.props.handleLetterPress(letter);
  }

  getButton = (letter) => (
    <View key={letter} style={styles.letter}>
      <Button
        title={letter}
        color='black'
        onPress={this.handlePress.bind(this, letter)}
        // disabled={this.props.disabledLetters.includes(letter)}
        accessibilityLabel={`Press letter ${letter}`}
      />
    </View>
 )

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
    flex: 1,
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  letter: {
    height: 36,
    width: 36,
  },
});
