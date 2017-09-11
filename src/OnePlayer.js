import React, { Component } from 'react';
import Hangman from './Hangman';
import { ActivityIndicator, View, Text } from 'react-native';
import { getRandomLoading } from './hangmanHelper';
import words from './words';

const random = () => words[Math.floor(Math.random() * words.length)];

export default class OnePlayer extends Component {
  state = { word: '', isLoading: true }

  componentDidMount() {
    this.getRandomWord();
  }

  restartGame = () => {
    this.setState({ isLoading: true });
    this.getRandomWord();
  }

  getRandomWord = () => {
      const word = random().split('');
      this.setState({ word, isLoading: false })
  }

  render() {
    return this.state.isLoading ?
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <Text style={{ marginBottom: 10 }}>{getRandomLoading()}</Text>
        <ActivityIndicator size='large'/>
      </View>
    :
      <Hangman word={this.state.word} restartGame={this.restartGame} {...this.props}/>
  }
}
