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
    <View
      key={letter}
      style={{
        borderRadius: 5,
        padding: 5,
        margin: 1,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        backgroundColor: '#2E9298',
      }} // if disabled, make it darker
      >
      <Button
        title={letter}
        color='#fff'
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
    flex: 3,
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
