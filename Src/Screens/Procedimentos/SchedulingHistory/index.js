import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  TextInput
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

const widthScreen = Dimensions.get('window').width;

class SchedulingHistory extends Component {
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

          <Text style={Styles.scheduleHistory}>{"Histórico de agendamentos"}</Text>

          <View style={Styles.wrapper}>
            <Text style={Styles.feature}>{"Infusão"}</Text>

            <View style={{ width: widthScreen / 1.2, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={Styles.doctor}>{"Doutor:"}</Text>
              <Text style={Styles.name}>{"Padrão"}</Text>
            </View>

            <Text style={Styles.transportRequest}>{"Pedido de transpote até o local do exame"}</Text>
            <Text style={Styles.dateStatement}>{"Solicitação enviado dia 12/06/201 ás 16h"}</Text>
          </View>

        </SafeAreaView>
      </>
    )
  }
}
export default SchedulingHistory;