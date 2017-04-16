import React, { Component } from 'react';
import Hangman from './Hangman';
import { ActivityIndicator, View, Text } from 'react-native'
import { getRandomLoading } from './hangmanHelper'

export default class OnePlayer extends Component {
  state = { word: '', isLoading: true }

  componentDidMount() {
    this.getRandomWord();
  }

  restartGame = () => {
    this.getRandomWord();
  }

  getRandomWord = () => {
    const dict = 'hasDictionaryDef=true&minCorpusCount=100000&maxCorpusCount=-1';
    const min = '&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=12';
    const apiKey = '&api_key=7e7c12c6c2ef452e877100b856b02d429510bfc86590afc9e';
    this.setState({ isLoading: true });
    fetch(`http://api.wordnik.com/v4/words.json/randomWord?${dict}${min}${apiKey}`)
    .then((response) => response.json())
    .then((responseJson) => {
      const word = responseJson.word.toLowerCase().split('')
      this.setState({ word, isLoading: false })
    }).catch((error) => console.warn(error));
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
