import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Prompt from 'react-native-prompt';
import Button from './Button';

export default class Home extends Component {
  state = { promptVisible: false }

  handlePromptSubmit = (value) => {
    const word = value.replace(/[^A-Za-z']/g,'').toLowerCase().split('');
    this.props.navigator.push({ name: 'two', passProps: { peopleWord: word } })
    this.handlePrompt(false)();
  }

  handlePrompt = (bool) => () => this.setState({ promptVisible: bool })

  handleNavigator = () => this.props.navigator.push({ name: 'one' })

  render() {
    return (
      <Image source={require('./img/gallow.png')} style={styles.gallow}>
        <View style={styles.manWrapper}>
          <Image source={require('./img/man7.png')} style={styles.man}/>
        </View>
        <View style={styles.home}>
          <Text style={styles.header}>Hangman</Text>
          <Button
            style={styles.button}
            text='1 Player'
            handlePress={this.handleNavigator}
          />
          <Button
            style={styles.button}
            text='2 Player'
            handlePress={this.handlePrompt(true)}
          />
          <Prompt
            title='Enter a word for a friend to guess'
            placeholder='Use only letters, up to 12'
            visible={this.state.promptVisible}
            onCancel={this.handlePrompt(false)}
            onSubmit={this.handlePromptSubmit}
          />
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
    margin: 20,
  },
});
