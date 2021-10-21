import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Images from '../../Styles/Images';
import Styles from './Styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          {/* Heading */}
          <Text style={Styles.selectUser}>{"SELECIONE UM USUÁRIO"}</Text>
          {/* Ends */}

          {/* Select an user profile */}
          <View style={Styles.profilesAlign}>
            <Image source={Images.fulanoPaciente} style={Styles.icon} />
            <Image source={Images.adicionar} style={Styles.icon} />
          </View>

          <View style={Styles.textAlign}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Text style={Styles.fulanoPaciente}>{"Fulano (Paciente)"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfileRegistration') }}>
              <Text style={Styles.adicionarPerfil}>{"Adicionar perfil de cuidador"}</Text>
            </TouchableOpacity>
          </View>
          {/* Ends */}

          {/* Emergency */}
          <View style={Styles.EmergencyAlign}>

            <View style={Styles.align}>
              <Image source={Images.rescueService} style={Styles.rescue} />

              <TouchableOpacity>
                <Text style={Styles.emergenciais}>{"Emergenciais"}</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* Ends */}

        </SafeAreaView>
      </>
    )
  }
}
export default Profile;