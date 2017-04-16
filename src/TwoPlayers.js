import React, { Component } from 'react';
import Hangman from './Hangman';

export default class TwoPlayer extends Component {
  state = { word: '' }

  componentDidMount() {
    this.newWord();
  }

  newWord = () => {
    // as it loads make a modal appear over game
  }

  restartGame = () => {
    this.setState({ wrongGuesses: new List(), guesses: new List() });
    this.newWord();
  }

  render() {
    return <Hangman word={this.state.word} restartGame={this.restartGame} {...this.props}/>
  }
}
