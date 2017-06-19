import React, { Proptypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Gallows from './Gallows';
import LetterToWord from './LetterToWord';
import Keyboard from './Keyboard';
import Button from './Button';

const HangmanView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Button text='Home' handlePress={props.alertHome} style={topButtons}/>
        <Button text='New Game' handlePress={props.alertRestart} style={topButtons}/>
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
  },
});
