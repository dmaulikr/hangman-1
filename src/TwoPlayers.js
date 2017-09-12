import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Prompt from 'react-native-prompt';
import Hangman from './Hangman';
import { getRandomLoading } from './hangmanHelper'

export default class TwoPlayer extends Component {
  state = { promptVisible: false, word: this.props.peopleWord, isLoading: false, title: 'Enter a word for a friend' }

  restartGame = () => {
    this.setState({ word: '', promptVisible: true, isLoading: true, title: 'Enter a word for a friend' });
  }

  handlePromptSubmit = (value) => {
    const word = value.replace(/[^A-Za-z]/g,'').toLowerCase().split('');
    if (word.length > 13) {
        this.setState({ title: 'Enter a shorter word' })
    } else if (word.length < 2) {
        this.setState({ title: 'Enter a longer word' })
    } else {
        this.setState({ word, promptVisible: false, isLoading: false })
    }
  }

  handlePromptCancel = () => {
    this.props.navigator.push({ name: 'home' })
    this.setState({ promptVisible: false })
  }

  render() {
    const { isLoading, promptVisible, title, word } = this.state;
    return (
      <View style={styles.middle}>
        {isLoading  ?
          <View style={styles.middle}>
            <Text style={{ marginBottom: 10 }}>{getRandomLoading()}</Text>
            <ActivityIndicator size='large'/>
          </View>
        :
          <Hangman word={word} restartGame={this.restartGame} {...this.props}/>
        }
        <Prompt
          title={title}
          placeholder='Use only letters, up to 13'
          visible={promptVisible}
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
    backgroundColor: '#fff',
  },
});
