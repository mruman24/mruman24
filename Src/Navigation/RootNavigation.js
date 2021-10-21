import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../Screens/Splash';
import HomeNavigation from './HomeNavigation';

const AppNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    HomeNavigation: HomeNavigation
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(AppNavigator);
