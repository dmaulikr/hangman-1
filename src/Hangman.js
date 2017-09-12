import React, { Component } from 'react';
import { Alert, Platform, AsyncStorage } from 'react-native';
import { List } from 'immutable'
import { FacebookAds } from 'expo';
import HangmanView from "./HangmanView";

const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

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

  showModalAd = () => {
    const adId = Platform.OS === 'ios' ? "315751648888224_318988708564518" : "315751648888224_318993631897359";
    FacebookAds.InterstitialAdManager.showAd(adId)
      .then(didClick => {
          this.receiveHint();
      })
      .catch(error => {
          this.receiveHint();
      });
  }

  receiveHint = () => {
    const { word, guesses } = this.state;
    const letter = getRandomValue(word);
    if (!guesses.contains(letter)) {
        this.handleLetterPress(letter);
    } else {
        this.receiveHint();
    }
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
      setTimeout(() => { this.alertGameOver('You Lose') }, 750);
    }
  }

  saveResult = (endState) => {
      this.getItem(endState).then((item) => {
          const value = `${parseInt(item, 10) + 1}`;
          AsyncStorage.setItem(endState, value);
      });
  }

  getItem = async (item) => {
      const value = await AsyncStorage.getItem(item);
      return value || 0;
  }

  alertGameOver = (alertMessage) => {
    let descr = '';
    if (alertMessage === 'You Lose') {
        descr = `The correct word was ${this.state.word.join('').toUpperCase()}. `;
        this.saveResult('losses');
    } else {
        this.saveResult('wins');
    }
    Alert.alert(
      alertMessage,
      `${descr}Would you like to play again?`,
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
        showModalAd={this.showModalAd}
        handleLetterPress={this.handleLetterPress}
        getHangingMan={this.getHangingMan}
        word={this.state.word}
        wrongGuesses={this.state.wrongGuesses}
        guesses={this.state.guesses}
      />
    );
  }
}
