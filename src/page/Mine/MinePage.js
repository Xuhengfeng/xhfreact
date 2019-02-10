import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
const currentHeight = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    marginTop: currentHeight
  },
  flash: {
    flex: 1
  },
  tabBarIcon: {
    width: 19,
    height: 19
  }
});
export default class MinePage extends Component {
  static navigationOptions = {
    tabBarLabel: '个人',
    header: null, // 隐藏顶部导航栏
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
      <View>
        <Text>MinePage</Text>
      </View>
    );
  }
}
