import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

export default class Home extends Component {

  render() {
    return (
      <Image source={require('./img/gallow.png')} style={styles.gallow}>
        <View style={styles.home}>
          <Text style={styles.header}>Hangman</Text>
          <View style={styles.button}>
            <Button
              title='1 Player'
              color='#fff'
              onPress={() => this.props.navigator.push({ name: 'one' })}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='2 Player'
              color='#fff'
              onPress={() => this.props.navigator.push({ name: 'two' })}
            />
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  gallow: {
    flex: 1,
    width: null,
    height: null,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    paddingBottom: 50,
    fontStyle: 'italic',
    color: '#343434',
    shadowColor: '#000',
  },
  button: {
    height: 45,
    width: 125,
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    backgroundColor: '#2E9298',
    margin: 20,
  },
});
