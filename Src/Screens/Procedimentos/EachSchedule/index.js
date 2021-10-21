import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class EachSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voucherNumber: ''
    };
  }
  render() {
    const { voucherNumber } = this.state
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

          <Text style={Styles.infusao}>{"Infusão"}</Text>

          <Text style={Styles.voucher}>{"Insira o número do seu voucher:"}</Text>
          <View style={{ alignSelf: 'center', marginTop: 20 }}>
            <TextInput
              style={Styles.input}
              value={voucherNumber}
              placeholder={"EX: 3358459|"}
              placeholderTextColor='#C4C4C4'
              autoCapitalize={false}
              onChangeText={(value) => {
                this.setState({ voucherNumber: value })
              }}
            />
          </View>
          <View style={Styles.line} />

          <Text style={Styles.selectDoctor}>{"Escolha seu médico"}</Text>

          <TouchableOpacity>
            <Image source={Images.arrow} style={Styles.arrow} />
          </TouchableOpacity>
          <View style={Styles.lineDark} />

          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.textButton}>{"Solicitar agendamento"}</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </>
    )
  }
}
export default EachSchedule;