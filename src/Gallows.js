import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Gallows = (props) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image source={require('./img/gallow.png')} style={styles.gallow}/>
    </View>
    <View style={styles.right}>
      {props.wrongGuesses.map((letter, i) =>
        <View key={i}>
          <Text>{letter}</Text>
        </View>
      )}
    </View>
  </View>
);

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
    // borderWidth: 5,
  },
  gallow: {
    height: 375,
    width: 250,
  },
});
