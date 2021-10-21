import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

class Medicamentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}
            style={Styles.iconAlign}>
            <Image source={Images.home} style={Styles.icon} />
          </TouchableOpacity>

          <Text style={Styles.medicamentos}>{"Medicamentos"}</Text>

          <View style={Styles.featuresAlign}>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Alarmes') }}
              style={Styles.align}>
              <Image source={Images.alarm} style={Styles.logo} />
              <Text style={Styles.title}>{"Alarmes"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('BulaVirtual') }}
              style={Styles.align}>
              <Image source={Images.virtual} style={Styles.logo} />
              <Text style={Styles.title}>{"Bula Virtual"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('DeliveryStatus') }}
              style={Styles.align}>
              <Image source={Images.tracking} style={Styles.logo} />
              <Text style={Styles.title}>{"Status da entrega"}</Text>
            </TouchableOpacity>

          </View>

        </SafeAreaView>
      </>
    )
  }
}
export default Medicamentos;