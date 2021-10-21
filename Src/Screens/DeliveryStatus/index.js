import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Laudo aprovado", "Liberado pelo laboratório", "Pedido em rota", "Entregue"];

const customStyles = {
  stepStrokeCurrentColor: Colors.Blue,
  stepIndicatorSize: 54,
  currentStepIndicatorSize: 66,
  separatorStrokeWidth: 8,
  separatorFinishedColor: Colors.Blue,
  separatorUnFinishedColor: Colors.lightGrey,
  stepIndicatorFinishedColor: Colors.Blue,
  stepIndicatorUnFinishedColor: Colors.lightGrey,
  stepIndicatorCurrentColor: Colors.Blue,
  stepIndicatorLabelFontSize: 24,
  currentStepIndicatorLabelFontSize: 24,
  stepIndicatorLabelCurrentColor: Colors.White,
  stepIndicatorLabelFinishedColor: Colors.White,
  stepIndicatorLabelUnFinishedColor: Colors.Grey,
  labelColor: Colors.DarkGrey,
  labelSize: 16,
  labelAlign: 'baseline',
  currentStepLabelColor: Colors.DarkGrey
}

class DeliveryStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderSteps: false,
      currentPosition: 0
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  render() {
    const { OrderSteps } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.align}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Image source={Images.home} style={Styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Medicamentos') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <View style={Styles.direction}>
            <TouchableOpacity>
              <Text style={Styles.deliveryStatus}>{"Status da entrega"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.bulaOpen}>
              <Text style={Styles.history}>{"Histórico"}</Text>
            </TouchableOpacity>
          </View>

          <PagerView style={Styles.viewPager} initialPage={0}>

            <View style={Styles.statusdaEntrega} key="1">
              <Image source={Images.lane} style={Styles.slider} />

              <TouchableOpacity onPress={() => { this.setState({ OrderSteps: !this.state.OrderSteps }) }}
                style={Styles.orderWrapper}>
                <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>

                <Text style={Styles.title}>{"Medicação : Cloridrato de desvenlafaxina"}</Text>

                <Text style={Styles.program}>{"Programa: HUMANIZAR"}</Text>
                <Text style={Styles.laboratory}>{"Laboratório: ABCD"}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.setState({ OrderSteps: !this.state.OrderSteps }) }}
                style={Styles.orderWrapper}>
                <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>

                <Text style={Styles.title}>{"Medicação : Predinisona"}</Text>

                <Text style={Styles.program}>{"Programa: HUMANIZAR"}</Text>
                <Text style={Styles.laboratory}>{"Laboratório: ABCD"}</Text>
              </TouchableOpacity>

            </View>

            <View style={Styles.historico} key="2">
              <Image source={Images.lane} style={Styles.slider_History} />

              <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={Styles.orderWrapper}>
                  <View style={Styles.flexDirection}>
                    <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                    <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                  </View>

                  <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.orderWrapper}>
                  <View style={Styles.flexDirection}>
                    <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                    <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                  </View>

                  <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.orderWrapper}>
                  <View style={Styles.flexDirection}>
                    <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                    <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                  </View>

                  <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.orderWrapper}>
                  <View style={Styles.flexDirection}>
                    <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                    <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                  </View>

                  <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.orderWrapper}>
                  <View style={Styles.flexDirection}>
                    <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                    <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                  </View>

                  <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 20 }} />

              </ScrollView>

            </View>
          </PagerView>

          {OrderSteps ? (
            <Modal
              isVisible={OrderSteps}
              animationIn={'slideInUp'}
              animationOut={'fadeInUp'}
              animationInTiming={300}
              animationOutTiming={300}
              avoidKeyboard={true}
              transparent={true}
              onBackdropPress={() => { this.setState({ OrderSteps: false }) }} >

              <SafeAreaView />

              <View style={Styles.container}>

                <View style={Styles.align}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
                    <Image source={Images.home} style={Styles.icon} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Medicamentos') }}>
                    <Image source={Images.leftback} style={Styles.back} />
                  </TouchableOpacity>
                </View>

                <View style={Styles.direction}>
                  <TouchableOpacity>
                    <Text style={Styles.deliveryStatus}>{"Status da entrega"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.bulaOpen}>
                    <Text style={Styles.history}>{"Histórico"}</Text>
                  </TouchableOpacity>
                </View>

                <PagerView style={Styles.viewPager} initialPage={0}>

                  <View style={Styles.statusdaEntrega} key="1">
                    <Image source={Images.lane} style={Styles.slider} />

                    <TouchableOpacity onPress={() => { this.setState({ OrderSteps: !this.state.OrderSteps }) }}
                      style={Styles.wrapper}>

                      <Text style={Styles.orderNo}>{"PEDIDO #12883149"}</Text>
                    </TouchableOpacity>

                    <View style={Styles.stepIndicator}>
                      <StepIndicator
                        stepCount="4"
                        customStyles={customStyles}
                        direction="vertical"
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                      />
                    </View>

                  </View>

                  <View style={Styles.historico} key="2">
                    <Image source={Images.lane} style={Styles.slider_History} />

                    <ScrollView showsVerticalScrollIndicator={false}>

                      <TouchableOpacity style={Styles.orderWrapper}>
                        <View style={Styles.flexDirection}>
                          <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                          <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                        </View>

                        <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.orderWrapper}>
                        <View style={Styles.flexDirection}>
                          <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                          <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                        </View>

                        <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.orderWrapper}>
                        <View style={Styles.flexDirection}>
                          <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                          <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                        </View>

                        <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.orderWrapper}>
                        <View style={Styles.flexDirection}>
                          <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                          <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                        </View>

                        <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.orderWrapper}>
                        <View style={Styles.flexDirection}>
                          <Text style={Styles.order}>{"PEDIDO #12883149"}</Text>
                          <Text style={Styles.deliveryOn}>{"ENTREGUE DIA 21/07/2021"}</Text>
                        </View>

                        <Text style={Styles.medicieneTitle}>{"Medicação : Predinisona"}</Text>
                      </TouchableOpacity>

                      <View style={{ marginBottom: 20 }} />

                    </ScrollView>

                  </View>
                </PagerView>

              </View>

            </Modal>
          ) : null}

        </SafeAreaView>
      </>
    )
  }
}
export default DeliveryStatus;