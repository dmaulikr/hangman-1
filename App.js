import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import Home from './src/Home';
import OnePlayer from './src/OnePlayer';
import TwoPlayers from './src/TwoPlayers';

export default class App extends Component {

  renderScene = (route, navigator) => {
    if (route.name == 'one') {
      return <OnePlayer navigator={navigator} />
    } else if (route.name == 'two') {
      return <TwoPlayers navigator={navigator} />
    } else {
      return <Home navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this.renderScene}
        style={{ flex: 1 }}
      />
    );
  }
}
