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
import * as Constants from '../../../Constants';
import Styles from './Styles';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false
    };
  }

  clickedBox = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { email, password, checked } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <Image source={Images.ePharma} style={Styles.logo} />

          <Text style={Styles.login}>{"Login"}</Text>
          <View style={Styles.InputWrapper}>
            <TextInput
              style={Styles.textInput}
              value={email}
              placeholder={'Email'}
              placeholderTextColor={Colors.DarkGrey}
              autoCapitalize='none'
              onChangeText={(value) => {
                this.setState({ email: value })
              }}
            />
          </View>

          <Text style={Styles.senha}>{"Senha"}</Text>
          <View style={Styles.InputWrapper}>
            <TextInput
              style={Styles.textInput}
              value={password}
              placeholder={'Password'}
              placeholderTextColor={Colors.DarkGrey}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(value) => {
                this.setState({ password: value })
              }}
            />
          </View>

          <TouchableOpacity>
            <Text style={Styles.forgotPassword}>{"Esqueci minha senha*"}</Text>
          </TouchableOpacity>

          {/* Buttons */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }}
            style={Styles.logarButton}>
            <Text style={Styles.text}>{"LOGAR"}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('CPF') }}
            style={Styles.registerButton}>
            <Text style={Styles.text}>{"Meu primeiro acesso"}</Text>
          </TouchableOpacity>
          {/* Buttons */}

          <View style={Styles.validationAlign}>
            <Text style={Styles.validation}>{"Manter logado"}</Text>
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
          </View>

        </SafeAreaView>
      </>
    )
  }
}
export default Login;