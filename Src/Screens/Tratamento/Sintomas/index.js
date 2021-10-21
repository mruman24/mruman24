import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class Sintomas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <View style={Styles.align}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfilePreview') }}>
              <Image source={Images.home} style={Styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProgramInformation') }}>
              <Image source={Images.leftback} style={Styles.back} />
            </TouchableOpacity>
          </View>

          <View style={Styles.alignPages}>
            <TouchableOpacity>
              <Text style={Styles.deliveryStatus}>{"Sintomas"}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Styles.history}>{"Histórico"}</Text>
            </TouchableOpacity>
          </View>

          <PagerView style={Styles.viewPager} initialPage={0}>

            <View style={Styles.sintomas} key="1">
              <Image source={Images.lane} style={Styles.slider} />

              <Text style={Styles.interogate}>{"Como você está se sentindo hoje?"}</Text>

              <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('EachSintomas') }}
                    style={Styles.alignItems}>
                    <Image source={Images.sintomas1} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Afta"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas2} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Cansaço"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas3} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Coceira"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas4} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Confusão"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas5} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Convulsão"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas6} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Diarreia"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas7} style={Styles.symptoms} />
                    <Text style={Styles.difficultSwallowing}>{"Dificuldade para engolir"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas8} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Dores"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas9} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Enjôo"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas10} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Falta de ar"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas11} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Febre"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas12} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Formigamento"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas13} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Inchaço"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas14} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Insônia"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas15} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Perda de apetite"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas16} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Prisão de ventre"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas17} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Reações na pele"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas18} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Sangramento"}</Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.symptomsAlign}>
                  <TouchableOpacity style={Styles.alignItems}>
                    <Image source={Images.sintomas19} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Vômito"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('OutrosSintomas') }}
                    style={Styles.alignItems}>
                    <Image source={Images.sintomas20} style={Styles.symptoms} />
                    <Text style={Styles.symptomTitle}>{"Outros"}</Text>
                  </TouchableOpacity>

                  <View style={Styles.alignItems} />
                </View>

                <View style={{ marginBottom: 20 }} />

              </ScrollView>

            </View>

            <View style={Styles.historico} key="2">
              <Image source={Images.lane} style={Styles.slider_History} />
            </View>
          </PagerView>

        </SafeAreaView>
      </>
    )
  }
}
export default Sintomas;