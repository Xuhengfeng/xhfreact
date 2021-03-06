import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  WebView
} from 'react-native';
const currentHeight = StatusBar.currentHeight;

export default class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    header: null,
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../img/home_sel.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../img/home_nor.png')}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://www.imooc.com/#' }}
          startInLoadingState
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: currentHeight
  },
  flash: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabBarIcon: {
    width: 19,
    height: 19
  }
});
