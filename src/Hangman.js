import React, { Component } from 'react';
import { Alert } from 'react-native';
import { List } from 'immutable'
import HangmanView from "./HangmanView";

export default class Hangman extends Component {
  state = { word: this.props.word, wrongGuesses: new List(), guesses: new List() };

  getHangingMan = () => {
    const images = {
      1: require('./img/man1.png'),
      2: require('./img/man2.png'),
      3: require('./img/man3.png'),
      4: require('./img/man4.png'),
      5: require('./img/man5.png'),
      6: require('./img/man6.png'),
      7: require('./img/man7.png'),
    }
    return images[this.state.wrongGuesses.size + 1];
  }

  alertRestart = () => {
    Alert.alert(
      'You have a game running.',
      'Are you sure you want to restart?',
      [{ text: 'No' }, { text: 'Yes', onPress: () => this.restartGame() }],
    )
  }

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
  	if (currentAnswer.length === word.length) {
      this.alertGameOver('You Win!')
    }
  }

  wrongAnswer = (wrongGuesses) => {
    this.setState({ wrongGuesses });
    if (wrongGuesses.size === 6) {
      setTimeout(() => { this.alertGameOver('You Lose') }, 2000);
    }
  }

  alertGameOver = (alertMessage) => {
    Alert.alert(
      alertMessage,
      'Would you like to play again?',
      [
        { text: 'No', onPress: () => this.goHome() },
        { text: 'Yes', onPress: () => this.restartGame() },
      ],
    )
  }

  alertHome = () => {
    Alert.alert(
      'You have a game running.',
      'Are you sure you want to go home?',
      [{ text: 'No' }, { text: 'Yes', onPress: () => this.goHome() }],
    )
  }

  goHome = () => this.props.navigator.push({ name: 'home' })

  render() {
    return (
      <HangmanView
        alertHome={this.alertHome}
        alertRestart={this.alertRestart}
        handleLetterPress={this.handleLetterPress}
        getHangingMan={this.getHangingMan}
        word={this.state.word}
        wrongGuesses={this.state.wrongGuesses}
        guesses={this.state.guesses}
      />
    );
  }
}
