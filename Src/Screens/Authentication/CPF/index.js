import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  Dimensions
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';
import { TextInput } from 'react-native-gesture-handler';
import Terms from '../../../Components/Terms';

const widthScreen = Dimensions.get('window').width;

class CPF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CPF: '',
      email: '',
      code: '',
      senha: '',
      confirmSehna: '',
      Authentication: false,
      Password: false,
      Success: false,
      addTerms: false
    };
  }

  termsOpen = () => {
    this.setState({
      Password: false,
      addTerms: !this.state.addTerms
    })
  }
  termsClose = () => {
    this.setState({ addTerms: !this.state.addTerms })
  }

  render() {
    const { CPF, email, code, senha, confirmSehna, pageIndex, Authentication, Password, Success, addTerms } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={32}
            showsHorizontalScrollIndicator={false}
          >

            <View style={Styles.listHorizontal}>
              <View style={Styles.credentialAlign}>
                <Text style={Styles.credential}>{"Digite seu CPF"}</Text>
              </View>

              <View style={Styles.InputWrapper}>
                <TextInput
                  style={Styles.textInput}
                  value={CPF}
                  placeholderTextColor={Colors.DarkGrey}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ CPF: value })
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => { this.setState({ Password: !this.state.Password }) }}
                style={Styles.completeSign}>
                <Image source={Images.submit} style={Styles.vector} />
              </TouchableOpacity>
            </View>

            <View style={Styles.listHorizontal}>
              <View style={Styles.credentialAlign}>
                <Text style={Styles.credential}>{"Digite seu Email"}</Text>
              </View>

              <View style={Styles.InputWrapper}>
                <TextInput
                  style={Styles.textInput}
                  value={email}
                  value={CPF}
                  placeholderTextColor={Colors.DarkGrey}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => { this.setState({ Success: !this.state.Success }) }}
                style={Styles.completeSign}>
                <Image source={Images.submit} style={Styles.vector} />
              </TouchableOpacity>
            </View>

            <View style={Styles.listHorizontal}>
              <View style={Styles.credentialAlign}>
                <Text style={Styles.credential}>{"Digite o código de autentificação que foi encaminhado para seu email"}</Text>
              </View>

              <View style={Styles.InputWrapper}>
                <TextInput
                  style={Styles.textInput}
                  value={code}
                  placeholderTextColor={Colors.DarkGrey}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ code: value })
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => { this.setState({ Authentication: !this.state.Authentication }) }}
                style={Styles.completeSign}>
                <Image source={Images.submit} style={Styles.vector} />
              </TouchableOpacity>
            </View>

          </ScrollView>

          <View style={Styles.paginationWrapper}>
            {Array.from(Array(3).keys()).map((key, index) => (
              <View style={[Styles.paginationDots, { opacity: pageIndex === index ? 1 : 1 }]} key={index} />
            ))}
          </View>

          {Authentication ? (
            <Modal
              isVisible={Authentication}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ Authentication: false }) }} >

              <View style={{ flex: 1, backgroundColor: Colors.Blur, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.like} style={{ width: 65, height: 65, marginBottom: 15 }} />

                <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.White, width: '80%', textAlign: 'center' }}>{"AUTENTIFICAÇÃO FINALIZADA!"}</Text>
              </View>

            </Modal>
          ) : null}

          {Password ? (
            <Modal
              isVisible={Password}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ Password: false }) }} >

              <View style={{ flex: 1, backgroundColor: Colors.White, justifyContent: 'center', alignItems: 'center' }}>

                <View style={Styles.credentialAlign}>
                  <Text style={Styles.credential}>{"CrIe uma senha"}</Text>
                </View>

                <Text style={Styles.validation}>{"Mínimo 8 caracteres*"}</Text>
                <View style={Styles.passwordWrapper}>
                  <TextInput
                    style={Styles.textInput}
                    value={senha}
                    placeholderTextColor={Colors.DarkGrey}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(value) => {
                      this.setState({ senha: value })
                    }}
                  />
                </View>

                <Text style={Styles.validation}>{"Repita a senha"}</Text>
                <View style={Styles.passwordWrapper}>
                  <TextInput
                    style={Styles.textInput}
                    value={confirmSehna}
                    placeholderTextColor={Colors.DarkGrey}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(value) => {
                      this.setState({ confirmSehna: value })
                    }}
                  />
                </View>

                <TouchableOpacity onPress={this.termsOpen}
                  style={Styles.completePassword}>
                  <Image source={Images.submit} style={Styles.vector} />
                </TouchableOpacity>

              </View>

            </Modal>
          ) : null}
          {
            addTerms ?
              <Terms
                open={addTerms}
                close={this.termsClose}
              />
              : null
          }

          {Success ? (
            <Modal
              isVisible={Success}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ Success: false }) }} >

              <View style={{ flex: 1, backgroundColor: Colors.Blur, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.like} style={{ width: 65, height: 65, marginBottom: 15 }} />

                <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.White, width: '70%', textAlign: 'center' }}>{"SENHA CADASTRADA COM SUCESSO!"}</Text>
              </View>

            </Modal>
          ) : null}

        </SafeAreaView>
      </>
    )
  }
}
export default CPF;