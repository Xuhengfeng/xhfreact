import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import px2dp from '../../utils/px2dp';
const styles = {
  container: {
    flex: 1
  },
  tabBarIcon: {
    width: 19,
    height: 19
  },
  wrapper: {
    height: px2dp(250),
    backgroundColor: 'red'
  },
  image: {
    width: px2dp(750)
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
    this.goNewsList = this.goNewsList.bind(this);
  }
  static navigationOptions = {
    title: '任务',
    tabBarLabel: '任务',
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
        <View>
          <Button
            onPress={this.goNewsList}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
  goNewsList() {
    this.props.navigation.navigate('NewsListScreen');
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
