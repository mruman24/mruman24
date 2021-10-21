import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

import CustomizeTime from '../../Components/CustomizeTime';
import ToggleSwitch from 'toggle-switch-react-native';
import { TextInput } from 'react-native';

class Alarmes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmTitle: '',
      timer: '',
      alarmSwitch: false,
      ExcluirAlarme: false,
      AdicionarAlarme: false,
      checked: false,
      addCustomizeTime: false
    };
  }

  clickedBox = () => {
    this.setState({ checked: !this.state.checked })
  }

  customizeTimeOpen = () => {
    this.setState({
      AdicionarAlarme: false,
      addCustomizeTime: !this.state.addCustomizeTime
    })
  }
  customizeTimeclose = () => {
    this.setState({ addCustomizeTime: !this.state.addCustomizeTime })
  }

  render() {
    const { alarmSwitch, ExcluirAlarme, AdicionarAlarme, timer,
      addCustomizeTime, checked, alarmTitle } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.align}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Image source={Images.home} style={Styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Medicamentos') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <Text style={Styles.alarmes}>{"Alarmes"}</Text>

          <View style={Styles.align}>
            <Text style={Styles.title}>{"DESVENLAFAXINA"}</Text>

            <ToggleSwitch style={Styles.switch}
              isOn={alarmSwitch}
              onColor={Colors.Parrot}
              offColor={Colors.lightGrey}
              size="medium"
              onToggle={isOn => this.setState({ alarmSwitch: isOn })}
            />
          </View>

          <Text style={Styles.time}>{"8:00"}</Text>

          <View style={Styles.direction}>
            <Text style={Styles.description}>{"dom.,seg.,ter."}</Text>

            <TouchableOpacity>
              <Image source={Images.edit} style={Styles.edit} />
            </TouchableOpacity>
          </View>

          {/* Delete existing Alarm */}

          <TouchableOpacity onPress={() => { this.setState({ ExcluirAlarme: !this.state.ExcluirAlarme }) }}
            style={Styles.delete}>

            <Image source={Images.bin} style={Styles.bin} />
            <Text style={Styles.excluirAlarme}>{"Excluir alarme"}</Text>

          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Images.deletearrow} style={Styles.arrow} />
          </TouchableOpacity>

          <View style={Styles.line} />

          {/* Add a new Alarm */}

          <TouchableOpacity onPress={() => { this.setState({ AdicionarAlarme: !this.state.AdicionarAlarme }) }}>
            <Image source={Images.addition} style={Styles.adicionarOption} />
          </TouchableOpacity>
          <Text style={Styles.adicionarAlarme}>{"ADICIONAR ALARME"}</Text>

          {ExcluirAlarme ? (
            <Modal
              isVisible={ExcluirAlarme}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ ExcluirAlarme: false }) }} >

              <SafeAreaView style={{ backgroundColor: Colors.lightBlue }} />

              <View style={Styles.container}>
                <View style={Styles.deleteWrapper}>

                  <Text style={Styles.deleteDescription}>{"TEM CERTEZA QUE DESEJA EXCLUIR ESSE ALARME?"}</Text>

                  <View style={Styles.deleteOptions}>
                    <TouchableOpacity onPress={() => { this.setState({ ExcluirAlarme: false }) }}>
                      <Text style={Styles.sim}>{"SIM"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setState({ ExcluirAlarme: false }) }}>
                      <Text style={Styles.nao}>{"NÃO"}</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </Modal>
          ) : null}

          {AdicionarAlarme ? (
            <Modal
              isVisible={AdicionarAlarme}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ AdicionarAlarme: false }) }} >

              <SafeAreaView style={{ backgroundColor: Colors.lightBlue }} />

              <View style={Styles.container}>
                <View style={Styles.alarmeWrapper}>

                  <TouchableOpacity onPress={() => { this.setState({ AdicionarAlarme: false }) }}
                    style={Styles.closeButton}>
                    <Image source={Images.close} style={Styles.close} />
                  </TouchableOpacity>

                  <View style={Styles.detailsContainer}>
                    <TextInput
                      style={Styles.textInput}
                      value={alarmTitle}
                      placeholder={'Nome do medicamento'}
                      placeholderTextColor={Colors.Grey}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ alarmTitle: value })
                      }} />
                  </View>

                  <TextInput
                    style={Styles.timer}
                    value={timer}
                    placeholder={'00:00'}
                    placeholderTextColor={Colors.DarkGrey}
                    onChangeText={(value) => {
                      this.setState({ timer: value })
                    }} />

                  <Text style={Styles.days}>{"DIAS DA SEMANA"}</Text>

                  <View style={Styles.daysAlign}>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"D"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"S"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"T"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"Q"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"Q"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"S"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.circle}>
                      <Text style={Styles.alphabet}>{"S"}</Text>
                    </TouchableOpacity>

                  </View>

                  <View style={Styles.validationAlign}>
                    {
                      checked ?
                        <TouchableOpacity onPress={this.clickedBox}>
                          <View style={Styles.checkWrapper}>
                            <Image source={Images.check} style={Styles.check} />
                          </View>
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={this.clickedBox}>
                          <View style={Styles.checked} />
                        </TouchableOpacity>
                    }
                    <Text style={Styles.daily}>{"DIARIAMENTE"}</Text>
                  </View>

                  <TouchableOpacity onPress={this.customizeTimeOpen}>
                    <Text style={Styles.customizetime}>{"PERSONALIZAR HORÁRIOS"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this.setState({ AdicionarAlarme: false }) }}>
                    <Image source={Images.submit} style={Styles.submitButton} />
                  </TouchableOpacity>

                </View>
              </View>

            </Modal>
          ) : null}
          {
            addCustomizeTime ?
              <CustomizeTime
                open={addCustomizeTime}
                close={this.customizeTimeclose}
              />
              : null
          }

        </SafeAreaView>
      </>
    )
  }
}
export default Alarmes;