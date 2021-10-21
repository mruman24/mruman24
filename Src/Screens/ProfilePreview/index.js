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

class ProfilePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myModel: false,
    };
  }

  closeModel = () => {
    this.setState({ myModel: !this.state.myModel })
  };

  render() {
    const { myModel } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <Text style={Styles.heading}>{"Olá, Fulano"}</Text>

          <View style={Styles.direction}>

            <View style={Styles.align}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Perfil') }}>
                <Image source={Images.perfil} style={Styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.setState({ myModel: !this.state.myModel }) }}>
                <Text style={Styles.title}>{"Perfil"}</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.align}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Medicamentos') }}>
                <Image source={Images.medicamentos} style={Styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.title}>{"Medicamentos"}</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.align}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('MainTratamento') }}>
                <Image source={Images.tratamento} style={Styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.title}>{"Tratamento"}</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={Styles.direction}>

            <View style={Styles.align}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('MainProcedimentos') }}>
                <Image source={Images.procedimentos} style={Styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('MainProcedimentos') }}>
                <Text style={Styles.title}>{"Procedimentos"}</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.align}>
              <Image source={Images.saude} style={Styles.icon} />
              <TouchableOpacity>
                <Text style={Styles.title}>{"Dicas de saúde"}</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.align}>
              <Image source={Images.faleconosco} style={Styles.icon} />
              <TouchableOpacity>
                <Text style={Styles.title}>{"Fale conosco"}</Text>
              </TouchableOpacity>
            </View>

          </View>

          {myModel ? (
            <Modal
              isVisible={myModel}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ myModel: false }) }} >

              <SafeAreaView style={{ backgroundColor: Colors.lightBlue }} />
              <View style={Styles.container}>

                <Text style={Styles.blind}>{"Olá, Fulano"}</Text>

                <View style={Styles.perfil}>

                  <View style={Styles.align}>
                    <Image source={Images.lightperfil} style={Styles.icon} />

                    <TouchableOpacity onPress={() => { this.setState({ myModel: false }) }}>
                      <Text style={Styles.tagPerfil}>{"Perfil"}</Text>
                    </TouchableOpacity>
                  </View>

                  <Image source={Images.leftarrow} style={Styles.indicator} />

                </View>

                <Text style={Styles.description}>{"Acesse a área de perfil e se necessário complete suas informações."}</Text>

              </View>
            </Modal>
          ) : null}

        </SafeAreaView>
      </>
    )
  }
}
export default ProfilePreview;