import React, { Component } from 'react';
import { Alert } from 'react-native';
import { List } from 'immutable'
import HangmanView from "./HangmanView";

export default class Hangman extends Component {
  state = { word: this.props.word, wrongGuesses: new List(), guesses: new List() };

  restartGame = () => {
    this.setState({ wrongGuesses: new List(), guesses: new List() });
  	this.props.restartGame();
  }

  handleLetterPress = (letter) => {
    let { word, guesses, wrongGuesses } = this.state;
		guesses = guesses.push(letter);
    if (word.includes(letter)) {
      this.checkAnswer(guesses, word)
    }
    else {
      wrongGuesses = wrongGuesses.push(letter);
      this.wrongAnswer(wrongGuesses)
    }
    this.setState({ guesses })
  }

  checkAnswer = (guesses, word) => {
  	const currentAnswer = word.filter(letter => guesses.includes(letter))
    console.log('word size', word.size);
    console.log('word lengtj', word.length);
    console.log();
  	if (currentAnswer.size === word.size) {
      this.alert('You Win!')
    }
  }

  wrongAnswer = (wrongGuesses) => {
    console.log('wrong g', wrongGuesses);
    if (wrongGuesses.size === 6) this.alert('You Lose')
    this.setState({ wrongGuesses });
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
