import { StackNavigator } from 'react-navigation';
import { TabNav } from './RootPage';
import NewsListScreen from './page/Task/NewsListScreen';
const App = StackNavigator(
  {
    NewsListScreen: {
      screen: NewsListScreen
    },
    Main: {
      screen: TabNav,
      // 但是当某个页面也设置了 navigationOptions，则会失效，优先使用页面设置
      navigationOptions: ({ navigation }) => ({
        // 隐藏顶部导航栏
        header: null
      })
    }
  },
  {
    initialRouteName: 'Main', // 默认显示界面
    mode: 'card', // 页面跳转方式
    headerMode: 'screen' // 指明头部的渲染方式
  }
);

export default App;
