import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage } from 'react-native';
import Prompt from 'react-native-prompt';
import Button from './Button';

export default class Home extends Component {
  state = { promptVisible: false, title: 'Enter a word for a friend', wins: 0, percentage: 0 }

  componentDidMount = () => {
    this.getItem('losses').then((lose) => {
        this.getItem('wins').then((win) => {
            const losses = parseInt(lose, 10) || 0;
            const wins = parseInt(win, 10) || 0;
            let percentage = (wins / (wins + losses)).toFixed(2) * 100;
            if (!percentage) percentage = 0;
            this.setState({ wins, percentage });
        });
    });
  }

  getItem = async (item) => {
      const value = await AsyncStorage.getItem(item);
      return value;
  }

  handlePromptSubmit = (value) => {
    const word = value.replace(/[^A-Za-z]/g,'').toLowerCase().split('');
    if (word.length > 13) {
        this.setState({ title: 'Enter a shorter word' })
    } else if (word.length < 2) {
        this.setState({ title: 'Enter a longer word' })
    } else {
        this.props.navigator.push({ name: 'two', passProps: { peopleWord: word } })
        this.handlePrompt(false)();
    }
  }

  handlePrompt = (bool) => () => this.setState({ promptVisible: bool })

  handleNavigator = () => this.props.navigator.push({ name: 'one' })

  render() {
    const { wins, percentage, title, promptVisible } = this.state;
    return (
      <Image source={require('./img/gallow.png')} style={styles.gallow}>
        <View style={styles.manWrapper}>
          <Image source={require('./img/man7.png')} style={styles.man}/>
        </View>
        <View style={styles.home}>
          <Text style={styles.header}>Hangman</Text>
          <Text>Total Wins: {wins}</Text>
          <Text style={styles.score}>Win percentage: {percentage}%</Text>
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
            title={title}
            placeholder='Use only letters, up to 13'
            visible={promptVisible}
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
    bottom: 20,
    fontStyle: 'italic',
    color: '#343434',
    shadowColor: '#000',
  },
  button: {
    height: 45,
    width: 200,
    margin: 10,
  },
  score: {
    marginBottom: 20,
  },
});
