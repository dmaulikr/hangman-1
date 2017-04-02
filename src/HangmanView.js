import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HangmanView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Kiss Me Hannah!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4183D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// map out tiles
// map out wrong guesses
// button onClick handleLetterClick. They will be selecting letters
// make guesses disabled
