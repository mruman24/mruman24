import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from 'react-native';
import { ScrollView } from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

import Bula from '../../Components/Bula';

class BulaVirtual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Informacoes: false,
      addBula: false
    };
  }

  bulaOpen = () => {
    this.setState({
      Informacoes: false,
      addBula: !this.state.addBula
    })
  }
  bulaClose = () => {
    this.setState({ addBula: !this.state.addBula })
  }

  render() {
    const { Informacoes, addBula } = this.state
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

          <Text style={Styles.bulaVirtual}>{"Bula Virtual"}</Text>

          <TouchableOpacity onPress={() => { this.setState({ Informacoes: !this.state.Informacoes }) }}
            style={Styles.bulletWrapper}>
            <Text style={Styles.chemistry}>{"SUCCINATO DE DESVENLAFAXINA - NOVA QUÍMICA"}</Text>

            <View style={Styles.direction}>
              <View style={Styles.alphabetContainer}>
                <Text style={Styles.alphabet}>{"R"}</Text>
              </View>
              <Text style={Styles.title}>{"ROCHE"}</Text>
            </View>

            <Text style={Styles.approval}>{"Aprovado pela ANVISA desde  30/01/2017"}</Text>
            <Text style={Styles.controller}>{"Receita de controle especial"}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.setState({ Informacoes: !this.state.Informacoes }) }}
            style={Styles.bulletWrapper}>
            <Text style={Styles.chemistry}>{"SUCCINATO DE DESVENLAFAXINA - NOVA QUÍMICA"}</Text>

            <View style={Styles.direction}>
              <View style={Styles.alphabetContainer}>
                <Text style={Styles.alphabet}>{"R"}</Text>
              </View>
              <Text style={Styles.title}>{"ROCHE"}</Text>
            </View>

            <Text style={Styles.approval}>{"Aprovado pela ANVISA desde  30/01/2017"}</Text>
            <Text style={Styles.controller}>{"Receita de controle especial"}</Text>
          </TouchableOpacity>

          {Informacoes ? (
            <Modal
              isVisible={Informacoes}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ Informacoes: false }) }} >

              <SafeAreaView />
              <View style={Styles.container}>
                <View style={Styles.mainContainer}>

                  <View style={Styles.align}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
                      <Image source={Images.home} style={Styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setState({ Informacoes: false }) }}>
                      <Image source={Images.leftback} style={Styles.back} />
                    </TouchableOpacity>
                  </View>

                  <Text style={Styles.bulaVirtual}>{"Bula Virtual"}</Text>

                  <View style={Styles.flexDirection}>
                    <TouchableOpacity>
                      <Text style={Styles.informacoes}>{"Informações"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.bulaOpen}>
                      <Text style={Styles.bula}>{"Bula"}</Text>
                    </TouchableOpacity>
                  </View>

                  <Image source={Images.lane} style={Styles.bar} />

                  <ScrollView showsVerticalScrollIndicator={false}>

                    <TouchableOpacity style={Styles.bulletWrapper}>
                      <Text style={Styles.chemistry}>{"SUCCINATO DE DESVENLAFAXINA - NOVA QUÍMICA"}</Text>

                      <View style={Styles.direction}>
                        <View style={Styles.alphabetContainer}>
                          <Text style={Styles.alphabet}>{"R"}</Text>
                        </View>
                        <Text style={Styles.title}>{"ROCHE"}</Text>
                      </View>

                      <Text style={Styles.approval}>{"Aprovado pela ANVISA desde  30/01/2017"}</Text>
                      <Text style={Styles.controller}>{"Receita de controle especial"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.principlesWrapper}>
                      <Text style={Styles.heading}>{"PRINCÍPIOS ATIVOS"}</Text>

                      <Text style={Styles.topDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                      <Text style={Styles.bottomDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.principlesWrapper}>
                      <Text style={Styles.heading}>{"GRUPOS FARMACOLÓGICOS"}</Text>

                      <Text style={Styles.topDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                      <Text style={Styles.bottomDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.principlesWrapper}>
                      <Text style={Styles.heading}>{"INDICAÇÕES TERAPÊUTICAS"}</Text>

                      <Text style={Styles.topDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                      <Text style={Styles.bottomDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.principlesWrapper}>
                      <Text style={Styles.heading}>{"RISCO NA GRAVIDEZ"}</Text>

                      <Text style={Styles.topDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                      <Text style={Styles.bottomDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.principlesWrapper}>
                      <Text style={Styles.heading}>{"LACTAÇÃO"}</Text>

                      <Text style={Styles.topDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                      <Text style={Styles.bottomDescription}>{"Lorem ipsum dolor sit amet,"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.laboratoryWrapper}>
                      <Text style={Styles.heading}>{"LABORATÓRIO"}</Text>

                      <Text style={Styles.laboratoryTitle}>{"Roche"}</Text>
                    </TouchableOpacity>

                  </ScrollView>

                </View>
              </View>

            </Modal>
          ) : null}

          {
            addBula ?
              <Bula
                open={addBula}
                close={this.bulaClose}
              />
              : null
          }

        </SafeAreaView>
      </>
    )
  }
}
export default BulaVirtual;