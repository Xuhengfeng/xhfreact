import { StackNavigator } from 'react-navigation';
import { TabNav } from './RootPage';
const App = StackNavigator(
  {
    Main: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        header: null // 隐藏顶部导航栏
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
