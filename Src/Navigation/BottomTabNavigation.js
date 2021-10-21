import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../Styles/Colors';
import Images from '../Styles/Images';
// import Home from '../Screens/MainScreens/Home';
// import Calendar from '../Screens/MainScreens/Calendar';
// import Chat from '../Screens/MainScreens/Chat';
// import Statistics from '../Screens/MainScreens/Statistics';

export default createBottomTabNavigator(
  {
    // Home: { screen: Home },
    // Calendar: { screen: Calendar },
    // Chat: { screen: Chat },
    // Statistics: { screen: Statistics },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let source;
        let title;

        switch (routeName) {
          case 'Home':
            source = Images.home;
            title = 'Home';
            break;
          case 'Calendar':
            source = Images.calendar;
            title = 'Calendar';
            break;
          case 'Chat':
            source = Images.chat;
            title = 'Chat';
            break;
          case 'Statistics':
            source = Images.statistics;
            title = 'Statistics';
            break;
          default:
            source = Images.home;
            title = 'Home';
        }

        return (
          <View style={[styles.container, focused && styles.containerFocused]}>
            <Image resizeMode="contain" source={source} style={[styles.icon, focused && styles.iconFocused]} />
            <View style={[styles.indicator, focused && styles.indicatorFocused]} />
          </View>
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        height: 60,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
      }
    }
  },
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerFocused: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconFocused: {
    width: 24,
    height: 24,
    tintColor: Colors.Blue
  },
  indicator: {
    width: 24,
    height: 2
  },
  indicatorFocused: {
    width: 24,
    height: 2,
    backgroundColor: Colors.Blue
  },
});