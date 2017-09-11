import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './cacheAssetsAsync';
import Home from './src/Home';
import OnePlayer from './src/OnePlayer';
import TwoPlayers from './src/TwoPlayers';

// AdSettings.addTestDevice(AdSettings.currentDeviceHash);

export default class App extends Component {
  state = { appIsReady: false }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  renderScene = (route, navigator) => {
    if (route.name == 'one') {
      return <OnePlayer navigator={navigator} />
    } else if (route.name == 'two') {
      return <TwoPlayers navigator={navigator} {...route.passProps}/>
    } else {
      return <Home navigator={navigator} />
    }
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./src/img/man1.png'),
          require('./src/img/man2.png'),
          require('./src/img/man3.png'),
          require('./src/img/man4.png'),
          require('./src/img/man5.png'),
          require('./src/img/man6.png'),
          require('./src/img/man7.png'),
          require('./src/img/gallow.png'),
        ]
      });
    } catch (e) {
      console.warn( // eslint-disable-line
        'There was an error caching assets (see: app.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.',
      );
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return (<AppLoading />);
    }
    return (
        <View style={styles.screen}>
            <Navigator
              initialRoute={{ name: 'Home' }}
              configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
              renderScene={this.renderScene}
              style={styles.screen}
            />
            {/* <View style={styles.ad}>
              <FacebookAds.BannerView
                placementId="315751648888224_317569755373080"
                type="standard"
              />
            </View> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    screen: {
        flex: 9,
    },
    ad: {
        flex: 1,
    }
});
