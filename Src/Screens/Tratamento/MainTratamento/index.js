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

class MainTratamento extends Component {
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

          <Text style={Styles.tratamento}>{"Tratamento"}</Text>

          <View style={Styles.featuresAlign}>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProgramInformation') }}
              style={Styles.align}>
              <Image source={Images.infoTratamento} style={Styles.logo} />
              <Text style={Styles.title}>{"Informaçoes do programa"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.align}>
              <Image source={Images.reportsTratamento} style={Styles.logo} />
              <Text style={Styles.title}>{"Relatos de efeitos colaterais"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.align}>
              <Image source={Images.communityTratamento} style={Styles.logo} />
              <Text style={Styles.title}>{"Comunidade"}</Text>
            </TouchableOpacity>

          </View>

        </SafeAreaView>
      </>
    )
  }
}
export default MainTratamento;