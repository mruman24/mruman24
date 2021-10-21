import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class AuthorizeSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.align}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Image source={Images.home} style={Styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('MainProcedimentos') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <Text style={Styles.authorizeSchedule}>{"Autorizações e agendamentos"}</Text>

          <ScrollView showsVerticalScrollIndicator={false}>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EachSchedule') }}
              style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Infusão"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Consulta?"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Colonoscopia"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Ultrassonografia do abdômen"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Tomografia do abdômen superior"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Ressonância do abdômen superior"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"HCV - RNA Quantitativo"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.wrapper}>
              <Text style={Styles.feature}>{"HCV - RNA Quantitativo"}</Text>
            </TouchableOpacity>

          </ScrollView>

        </SafeAreaView>
      </>
    )
  }
}
export default AuthorizeSchedule;