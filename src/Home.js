import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import Prompt from 'react-native-prompt';

export default class Home extends Component {
  state = { promptVisible: false }

  handlePromptSubmit = (value) => {
    const word = value.replace(/\s/g,'').toLowerCase().split('');
    this.props.navigator.push({ name: 'two', passProps: { peopleWord: word } })
    this.handlePromptCancel();
  }

  handlePromptCancel = () => this.setState({ promptVisible: false })

  render() {
    return (
      <Image source={require('./img/gallow.png')} style={styles.gallow}>
        <View style={styles.manWrapper}>
          <Image source={require('./img/man7.png')} style={styles.man}/>
        </View>
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
              onPress={() => this.setState({ promptVisible: true })}
            />
            <Prompt
              title='Enter one word for a friend to guess'
              placeholder='Use only letters, up to 12'
              visible={ this.state.promptVisible }
              onCancel={this.handlePromptCancel}
              onSubmit={this.handlePromptSubmit}
            />
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  manWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  man: {
    top: 75,
    height: 200,
  },
  gallow: {
    flex: 1,
    width: null,
    height: null,
  },
  home: {
    flex: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    bottom: 80,
    fontStyle: 'italic',
    color: '#343434',
    shadowColor: '#000',
  },
  button: {
    height: 45,
    width: 200,
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
