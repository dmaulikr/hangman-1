import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

const routes = [
  {title: 'Home', index: 0},
  {title: '1 Player', index: 1},
  {title: '2 Players', index: 2},
];

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            <TouchableHighlight onPress={() => {
              if (route.index === 0) {
                navigator.push(routes[1]);
              } else {
                navigator.pop();
              }
            }}>
            <Text>Hello {route.title}!</Text>
            </TouchableHighlight>
          }
          style={{padding: 100}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
