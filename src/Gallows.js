import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Gallows = (props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image source={require('./img/gallow.png')} style={styles.gallow}>
        <Image source={props.getHangingMan()} style={styles.man}/>
      </Image>
    </View>
    <View style={styles.right}>
      {!props.wrongGuesses ? null : props.wrongGuesses.map((letter, i) =>
        <View key={i}>
          <Text style={styles.letter}>{letter}</Text>
        </View>
      )}
    </View>
  </View>
)

export default Gallows;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'row'
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 35,
  },
  gallow: {
    height: 375,
    width: 250,
    alignItems: 'flex-end'
  },
  man: {
    top: 35,
  },
});
