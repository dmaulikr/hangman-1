import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Keyboard from './Keyboard';

export default class HangmanView extends Component {
  render() {
    const { restartGame } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Button
            title='Home'
            style={styles.topButtons}
          />
          <Button
            title='New Game'
            style={styles.topButtons}
            onPress={restartGame}
          />
        </View>
        <View style={styles.middle}>
          <Image
            source={require('./img/gallow.png')}
            style={styles.gallow}
          />
        </View>
        <View style={styles.bottom}>
          <Keyboard />
        </View>
      </View>
    );
  }
}

// home button left
// new game button to right
// gallow to left
// wrong guesss to right
// word
// keyboard

// map out tiles
// map out wrong guesses
// button onClick handleLetterClick. They will be selecting letters
// make guesses disabled

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afd1ff',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  middle: {
    flex: 5,
  },
  bottom: {
    flex: 2,
  },
  gallow: {
    height: 250,
    width: 225,
  },
  topButtons: {
    padding: '10px',
  },
});
