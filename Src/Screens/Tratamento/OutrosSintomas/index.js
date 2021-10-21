import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';
import { TextInput } from 'react-native-gesture-handler';

class OutrosSintomas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observation: '',
      Options: false
    };
  }

  render() {
    const { observation, Options } = this.props
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.align}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Image source={Images.home} style={Styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sintomas') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <View style={Styles.alignPages}>
            <TouchableOpacity>
              <Text style={Styles.symptoms}>{"Sintomas"}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Styles.history}>{"Histórico"}</Text>
            </TouchableOpacity>
          </View>

          <PagerView style={Styles.viewPager} initialPage={0}>

            <View key="1">
              <Image source={Images.lane} style={Styles.slider} />

              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.interogate}>{"Onde está sangrando?"}</Text>
                <TouchableOpacity onPress={() => { this.setState({ Options: !this.state.Options }) }}>
                  <Image source={Images.arrow} style={Styles.arrow} />
                </TouchableOpacity>

                <View style={Styles.line} />

                <Text style={Styles.painIntensity}>{"Qual a intesidade da sua dor?"}</Text>

                <View style={Styles.direction}>
                  <TouchableOpacity style={Styles.levelContainer}>
                    <Text style={Styles.level}>{"1"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.levelContainer}>
                    <Text style={Styles.level}>{"2"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.levelContainer}>
                    <Text style={Styles.level}>{"3"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.levelContainer}>
                    <Text style={Styles.level}>{"4"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.direction}>
                  <Text style={Styles.levelTitle}>{"1 - Leva"}</Text>
                  <Text style={Styles.levelTitle}>{"2 - Moderada"}</Text>
                </View>

                <View style={Styles.direction}>
                  <Text style={Styles.levelTitle}>{"3 - Intensa"}</Text>
                  <Text style={Styles.levelTitle}>{"4 - Muita intensa"}</Text>
                </View>

                <Text style={Styles.observe}>{"Observações:"}</Text>
                <View style={Styles.observeContainer}>
                  <TextInput
                    style={Styles.input}
                    value={observation}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ observation: value })
                    }}
                  />
                </View>

                <TouchableOpacity style={Styles.button}>
                  <Text style={Styles.buttonText}>{"Relatar"}</Text>
                </TouchableOpacity>
              </ScrollView>

            </View>

            <View key="2">
              <Image source={Images.lane} style={Styles.slider_History} />

              <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Styles.observationAlign}>
                  <Text style={Styles.appointment}>{"AFTA - 12/06/21 - 16:00"}</Text>

                  <TouchableOpacity style={Styles.diseaseContainer}>
                    <Text style={Styles.disease}>{"3"}</Text>
                  </TouchableOpacity>
                </View>

                <Text style={Styles.observation}>{"Lorem ipsum dolor sit amet, (observações)"}</Text>
                <View style={Styles.line} />

                <View style={Styles.observationAlign}>
                  <Text style={Styles.appointment}>{"ENJÔO - 09/06/21 - 09:00"}</Text>

                  <TouchableOpacity style={Styles.diseaseContainer}>
                    <Text style={Styles.disease}>{"1"}</Text>
                  </TouchableOpacity>
                </View>

                <Text style={Styles.observation}>{"Lorem ipsum dolor sit amet, (observações)"}</Text>
                <View style={Styles.line} />

                <View style={Styles.observationAlign}>
                  <Text style={Styles.appointment}>{"SANGRAMENTO NA URINA - 09/06/21 - 09:00"}</Text>

                  <TouchableOpacity style={Styles.diseaseContainer}>
                    <Text style={Styles.disease}>{"2"}</Text>
                  </TouchableOpacity>
                </View>

                <Text style={Styles.observation}>{"Lorem ipsum dolor sit amet, (observações)"}</Text>
                <View style={Styles.line} />

              </ScrollView>
            </View>
          </PagerView>

          {Options ? (
            <Modal
              isVisible={Options}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ Options: false }) }} >

              <View style={Styles.container}>
              </View>

            </Modal>
          ) : null}

        </SafeAreaView>
      </>
    )
  }
}
export default OutrosSintomas;