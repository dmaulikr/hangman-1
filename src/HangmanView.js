import React, { Proptypes } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Gallows from './Gallows';
import LetterToWord from './LetterToWord';
import Keyboard from './Keyboard';

const HangmanView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topButtons}>
          <Button title='Home' color='#fff' onPress={props.restartGame}/>
        </View>
        <View style={styles.topButtons}>
          <Button title='New Game' color='#fff' onPress={props.restartGame}/>
        </View>
      </View>
      <Gallows {...props}/>
      <LetterToWord {...props}/>
      <Keyboard {...props}/>
    </View>
  )
};

export default HangmanView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  topButtons: {
    height: 45,
    width: 125,
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    backgroundColor: '#2E9298',
  },
});
