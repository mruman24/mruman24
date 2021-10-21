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

class ProgramInformation extends Component {
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

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('MainTratamento') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <Text style={Styles.infoProgram}>{"Informações do pragrama"}</Text>

          <Text style={Styles.pathology}>{"Patologia: Artrite Reumatóide"}</Text>

          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"O que é?"}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('EachProgram') }}>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Sintomas?"}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sintomas') }}>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Diagnóstico"}</Text>
              <TouchableOpacity>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Tratamento"}</Text>
              <TouchableOpacity>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Prevenção"}</Text>
              <TouchableOpacity>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

            <View style={Styles.wrapper}>
              <Text style={Styles.feature}>{"Programa Humanizar"}</Text>
              <TouchableOpacity>
                <Image source={Images.addition} style={Styles.addition} />
              </TouchableOpacity>
            </View>

          </ScrollView>

        </SafeAreaView>
      </>
    )
  }
}
export default ProgramInformation;