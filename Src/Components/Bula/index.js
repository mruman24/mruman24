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
import { ScrollView } from 'react-native';

class Bula extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { open } = this.props
    return (
      <>
        <Modal
          isVisible={open}
          animationIn={'slideInUp'}
          animationOut={'fadeInUp'}
          animationInTiming={300}
          animationOutTiming={300}
          avoidKeyboard={true}
          transparent={true}
          onBackdropPress={() => { this.props.close() }} >

          <SafeAreaView />
          <View style={Styles.container}>
            <View style={Styles.mainContainer}>

              <View style={Styles.align}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
                  <Image source={Images.home} style={Styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.close() }}>
                  <Image source={Images.leftback} style={Styles.back} />
                </TouchableOpacity>
              </View>

              <Text style={Styles.bulaVirtual}>{"Bula Virtual"}</Text>

              <View style={Styles.flexDirection}>
                <TouchableOpacity onPress={() => { this.setState({ Informacoes: !this.state.Informacoes }) }}>
                  <Text style={Styles.informacoes}>{"Informações"}</Text>
                </TouchableOpacity>

                <TouchableOpacity>
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

                <Text style={Styles.query}>{"O QUE DEVO SABER ANTE DE TOMAR ESTE MEDICAMENTO?"}</Text>

                <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus erat quis ligula iaculis cursus. Cras aliquet tempus diam. Sed interdum metus non gravida vulputate. Mauris ut lobortis mauris. Sed suscipit metus tellus, quis sollicitudin metus mattis ac. Maecenas eget arcu purus. Pellentesque elementum magna id mauris facilisis ultricies. Vivamus a lacus vehicula, placerat ex et, placerat enim. Duis eget congue nibh."}</Text>

                <Text style={Styles.describe}>{"Nunc scelerisque dignissim est, sed condimentum nunc hendrerit quis. Integer quis efficitur tortor. Donec bibendum venenatis semper. Etiam at tortor id massa blandit sagittis dignissim eget tortor. Quisque et ex leo. Morbi sed auctor magna, ac sodales nisl. Phasellus imperdiet dui in ipsum maximus ullamcorper. Nam porttitor enim odio, quis pharetra nibh facilisis sed. Vestibulum sit amet blandit lacus. Cras egestas, felis et bibendum molestie, nunc orci viverra erat, in varius purus lectus ut felis. Pellentesque tincidunt, augue id egestas laoreet, ante nulla vulputate quam, eget ultricies eros est at risus. Cras mollis neque mi, in placerat felis dignissim in. Nulla ut elementum dui."}</Text>

              </ScrollView>

            </View>
          </View>

        </Modal>
      </>
    )
  }
}
export default Bula;