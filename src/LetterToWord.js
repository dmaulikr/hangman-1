import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class LetterToWord extends Component {

  getWordSlot = (letter, i) => {
    let { guesses } = this.props;
    let contents = guesses.includes(letter) ? letter : ' ';
    return (
      <View key={i} style={styles.letterView}>
        <Text style={styles.letter}>{contents}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.lowerMiddle}>
        {this.props.word.map(this.getWordSlot)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lowerMiddle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  letterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    marginLeft: 3,
    marginRight: 3,
  },
  letter: {
    fontSize: 35,
  },
});
