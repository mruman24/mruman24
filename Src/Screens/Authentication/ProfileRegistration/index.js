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
import { TextInput } from 'react-native-gesture-handler';

class ProfileRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      date: '',
      CPF: '',
      RG: '',
      occupation: ''
    };
  }
  render() {
    const { nome, date, CPF, RG, occupation } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.credentials}>

            <Text style={Styles.credential}>{"Nome completo*"}</Text>
            <View style={Styles.nameInputWrapper}>
              <TextInput
                style={Styles.textInput}
                value={nome}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ nome: value })
                }}
              />
            </View>

            <Text style={Styles.credential}>{"Data de nascimento*"}</Text>
            <View style={Styles.dateInputWrapper}>
              <TextInput
                style={Styles.textInput}
                value={date}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ date: value })
                }}
              />
            </View>

            <Text style={Styles.credential}>{"CPF*"}</Text>
            <View style={Styles.InputWrapper}>
              <TextInput
                style={Styles.textInput}
                value={CPF}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ CPF: value })
                }}
              />
            </View>

            <Text style={Styles.credential}>{"RG*"}</Text>
            <View style={Styles.InputWrapper}>
              <TextInput
                style={Styles.textInput}
                value={RG}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ RG: value })
                }}
              />
            </View>

            <Text style={Styles.credential}>{"Ocupação"}</Text>
            <View style={Styles.InputWrapper}>
              <TextInput
                style={Styles.textInput}
                value={occupation}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ occupation: value })
                }}
              />
            </View>

          </View>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}
            style={Styles.completeSign}>
            <Image source={Images.vector} style={Styles.vector} />
          </TouchableOpacity>

        </SafeAreaView>
      </>
    )
  }
}
export default ProfileRegistration;