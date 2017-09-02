import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Prompt from 'react-native-prompt';
import Hangman from './Hangman';
import { getRandomLoading } from './hangmanHelper'

export default class TwoPlayer extends Component {
  state = { promptVisible: false, word: this.props.peopleWord, isLoading: false }

  restartGame = () => {
    this.setState({ word: '', promptVisible: true, isLoading: true });
  }

  handlePromptSubmit = (value) => {
    const word = value.replace(/[^A-Za-z']/g,'').toLowerCase().split('');
    this.setState({ word, promptVisible: false, isLoading: false })
  }

  handlePromptCancel = () => {
    this.props.navigator.push({ name: 'home' })
    this.setState({ promptVisible: false })
  }

  render() {
    return (
      <View style={styles.middle}>
        {this.state.isLoading  ?
          <View style={styles.middle}>
            <Text style={{ marginBottom: 10 }}>{getRandomLoading()}</Text>
            <ActivityIndicator size='large'/>
          </View>
        :
          <Hangman word={this.state.word} restartGame={this.restartGame} {...this.props}/>
        }
        <Prompt
          title='Enter a word for a friend to guess'
          placeholder='Use only letters, up to 12'
          visible={this.state.promptVisible}
          onCancel={this.handlePromptCancel}
          onSubmit={this.handlePromptSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});
