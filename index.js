/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import Root from './src/root';
import StyleSheet375 from 'react-native-program-stylesheet';
import px2dp from './src/utils/px2dp';
React.$StyleSheet375 = StyleSheet375;
React.$px2dp = px2dp;
AppRegistry.registerComponent('xhfreact', () => Root);
