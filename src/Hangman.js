import React, { Component } from 'react';
import { Alert } from 'react-native';
import { List } from 'immutable'
import HangmanView from "./HangmanView";

export default class Hangman extends Component {
  state = { word: new List(), wrongGuesses: new List(), guesses: new List() };

  componentDidMount() {
    this.getRandomWord();
  }

  restartGame = () => {
    this.setState({ wrongGuesses: new List(), guesses: new List() });
  	this.getRandomWord();
  }

  getRandomWord = () => {
    const dict = 'hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1';
    const min = '&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12';
    const apiKey = '&api_key=7e7c12c6c2ef452e877100b856b02d429510bfc86590afc9e';
    return fetch(`http://api.wordnik.com/v4/words.json/randomWord?${dict}${min}${apiKey}`)
    .then((response) => response.json())
    .then((responseJson) => {
      const word = responseJson.word.toLowerCase().split('')
      this.setState({ word })
    }).catch((error) => console.warn(error));
  }

  handleLetterPress = (letter) => {
    let { word, guesses, wrongGuesses } = this.state;
		guesses = guesses.push(letter);
    this.setState({ guesses })
    if (word.includes(letter)) {
      const index = word.indexOf(letter)
      this.makeLetterAppear(index);
      this.checkAnswer()
    } else {
      wrongGuesses = wrongGuesses.push(letter);
      wrongAnswer(wrongGuesses)
    }
  }

  makeLetterAppear = () => {

  }

  checkAnswer = () => {
  	var currentAnswer="";
  	for(i=0;i<currentWord.length;i++){
  		currentAnswer+=($('#t'+i).text()); // checking if word === current answer
  	}
  	if( currentAnswer === currentWord) {

    } // alert two buttons.
  }

  wrongAnswer = (wrongGuesses) => {
    if (wrongGuesses === 6) this.alert('You lose')
    setState({ wrongGuesses });
  }

  alert = (alertMessage) => {
    Alert.alert(
           alertMessage,
           'Would you like to play again?',
           [{ text: 'No' }, { text: 'Yes', onPress: () => this.restartGame() }],
         )
  }

  render() {
    return (
      <HangmanView
        restartGame={this.restartGame}
        handleLetterPress={this.handleLetterPress}
        word={this.state.word}
        wrongGuesses={this.state.wrongGuesses}
        guesses={this.state.guesses}
      />
    );
  }
}
