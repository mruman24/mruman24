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
import { TextInput } from 'react-native';

class CustomizeTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      digit: '',
      checked: false
    };
  }

  clickedBox = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { open } = this.props
    const { checked, timer, digit } = this.state
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

          <SafeAreaView style={{ backgroundColor: Colors.lightBlue }} />

          <View style={Styles.container}>
            <View style={Styles.alarmeWrapper}>

              <TouchableOpacity onPress={() => { this.props.close() }}
                style={Styles.closeButton}>
                <Image source={Images.close} style={Styles.close} />
              </TouchableOpacity>

              <Text style={Styles.repeatAlarm}>{"Repetir alarme de:"}</Text>

              <View style={Styles.timerContainer}>
                <View style={Styles.wrapper}>
                  <TextInput
                    style={Styles.minutes}
                    value={timer}
                    placeholder={'00:00'}
                    placeholderTextColor={Colors.DarkGrey}
                    onChangeText={(value) => {
                      this.setState({ timer: value })
                    }} />
                </View>

                <View style={Styles.wrapper}>
                  <Text style={Styles.hours}>{"horas"}</Text>

                  <TouchableOpacity>
                    <Image source={Images.darkarrow} style={Styles.arrow} />
                  </TouchableOpacity>
                </View>
              </View>


              <Text style={Styles.repeatDays}>{"Repetir nos dias:"}</Text>

              <View style={Styles.daysAlign}>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"D"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"S"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"T"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"Q"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"Q"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"S"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.circle}>
                  <Text style={Styles.alphabet}>{"S"}</Text>
                </TouchableOpacity>

              </View>

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
                <Text style={Styles.daily}>{"DIARIAMENTE"}</Text>
              </View>

              <Text style={Styles.endsIn}>{"Termina em:"}</Text>

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
                <Text style={Styles.never}>{"Nunca"}</Text>
              </View>

              <View style={{ marginTop: 8 }} />

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

                <View style={Styles.digitWrapper}>
                  <TextInput
                    style={Styles.endsinOption}
                    value={digit}
                    placeholder={'0'}
                    placeholderTextColor={Colors.DarkGrey}
                    onChangeText={(value) => {
                      this.setState({ digit: value })
                    }} />
                </View>

                <View style={Styles.wrapper}>
                  <Text style={Styles.endsinOption}>{"Dias"}</Text>

                  <TouchableOpacity>
                    <Image source={Images.darkarrow} style={Styles.arrow} />
                  </TouchableOpacity>
                </View>

              </View>

              <TouchableOpacity onPress={() => { this.props.close() }}>
                <Image source={Images.submit} style={Styles.submitButton} />
              </TouchableOpacity>

            </View>
          </View>

        </Modal>
      </>
    )
  }
}
export default CustomizeTimes;
