import React, { Component } from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Images from '../../Styles/Images';
import Styles from './Styles';


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (!this.moved) {
        this.props.navigation.navigate('Login')
      }
    }, 3000);
  }

  render() {
    return (
      <>

        <SafeAreaProvider style={Styles.mainContainer}>
          <Image source={Images.ePharma} style={Styles.logo} />
        </SafeAreaProvider>

      </>
    );
  }
}
export default Splash;