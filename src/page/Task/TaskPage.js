import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
// 取得屏幕的宽高Dimensions
const { width } = Dimensions.get('window');
const styles = {
  container: {
    flex: 1
  },
  tabBarIcon: {
    width: 19,
    height: 19
  },
  wrapper: {
    width,
    height: 150,
    backgroundColor: 'red'
  },
  image: {
    width
  },

  paginationStyle: {
    bottom: 6
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0
  }
};
export default class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: true
    };
  }
  static navigationOptions = {
    tabBarLabel: '任务',
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
      <View style={styles.container}>
        <View style={styles.wrapper}>{this.renderBanner()}</View>
        <View style={{ width: 375, height: 0.5, backgroundColor: '#dcdcdc' }} />
      </View>
    );
  }
  // 轮播图
  renderBanner() {
    return (
      <Swiper
        removeClippedSubviews={false}
        showsButtons={false}
        autoplay={true}
        horizontal={true}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        <Image
          style={styles.image}
          source={require('../../img/swiper_1.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../img/swiper_2.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../img/swiper_3.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../img/swiper_4.jpg')}
        />
      </Swiper>
    );
  }
}
