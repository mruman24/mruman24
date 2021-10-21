import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}
            style={Styles.iconAlign}>
            <Image source={Images.home} style={Styles.icon} />
          </TouchableOpacity>

          <Image source={Images.perfil} style={Styles.logo} />

          <TouchableOpacity style={Styles.editarAlign}>
            <Text style={Styles.editar}>{"Editar"}</Text>
          </TouchableOpacity>

          {/* Details */}
          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Nome: "}</Text>
            <Text style={Styles.user}>{"Fulano Ferreira de Jesus"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Tipo Sanguineo: "}</Text>
            <Text style={Styles.user}>{"AB+"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Alergias: "}</Text>
            <Text style={Styles.allergies}>{"Diclofenaco, corante vermelho e camarão"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Patologias: "}</Text>
            <Text style={Styles.user}>{"Artrite reumatóide, hipertensão"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Medicamentos: "}</Text>
            <Text style={Styles.user}>{"Capitol, Succinato de blabla"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"RG: "}</Text>
            <Text style={Styles.user}>{"123.123.123.45"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Nascimento: "}</Text>
            <Text style={Styles.user}>{"12/11/87"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Contato: "}</Text>
            <Text style={Styles.user}>{"1191234-5678"}</Text>
          </View>

          <View style={Styles.direction}>
            <Text style={Styles.default}>{"Endereço: "}</Text>
            <Text style={Styles.address}>{"Av Dr Ricardo Guimarães, 1234. Vl Formosa - Sao paulo"}</Text>
          </View>
          {/* Details */}

        </SafeAreaView>
      </>
    )
  }
}
export default Perfil;