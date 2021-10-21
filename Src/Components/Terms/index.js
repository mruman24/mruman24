import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';
import { ScrollView } from 'react-native';

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  clickedBox = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { checked } = this.state
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
          <View style={Styles.mainContainer}>

            <View style={Styles.container}>
              <Text style={Styles.termos}>{"TERMOS"}</Text>

              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Text>
                <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Text>
                <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</Text>

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
                  <Text style={Styles.validation}>{"Aceito os termos e condiçoes de uso."}</Text>
                </View>

                <TouchableOpacity onPress={() => { this.props.close() }}
                  style={Styles.completeSign}>
                  <Image source={Images.submit} style={Styles.vector} />
                </TouchableOpacity>
              </ScrollView>

            </View>
          </View>

        </Modal>
      </>
    )
  }
}
export default Terms;