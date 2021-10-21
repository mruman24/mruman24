import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class MainProcedimentos extends Component {
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

          <Text style={Styles.procedimentos}>{"Procedimentos"}</Text>

          <View style={Styles.featuresAlign}>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AuthorizeSchedule') }}
              style={Styles.align}>
              <Image source={Images.procedimentos1} style={Styles.logo} />
              <Text style={Styles.title}>{"Autorizações e Agendamentos"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SchedulingHistory') }}
              style={[Styles.align, { marginLeft: 30 }]}>
              <Image source={Images.procedimentos2} style={Styles.logo} />
              <Text style={Styles.title}>{"Histórico de agendamento"}</Text>
            </TouchableOpacity>

          </View>

        </SafeAreaView>
      </>
    )
  }
}
export default MainProcedimentos;