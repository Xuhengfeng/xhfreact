import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import px2dp from '../../utils/px2dp';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
export default class NewsListScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 20,
          color: '#000'
        }}
      >
        自定义Header
      </Text>
    ),
    headerRight: <View />,
    headerStyle: {
      height: px2dp(80)
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>testest</Text>
      </View>
    );
  }
}
