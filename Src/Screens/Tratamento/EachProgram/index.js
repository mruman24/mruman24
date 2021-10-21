import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class EachProgram extends Component {
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

          <Text style={Styles.infoProgram}>{"Informações do pragrama"}</Text>

          <Text style={Styles.pathology}>{"Patologia: Artrite Reumatóide"}</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.contentWrapper}>

              <View style={Styles.direction}>
                <Text style={Styles.oQue}>{"O que é?"}</Text>

                <TouchableOpacity>
                  <Image source={Images.addition} style={Styles.addition} />
                </TouchableOpacity>
              </View>

              <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus erat quis ligula iaculis cursus. Cras aliquet tempus diam. Sed interdum metus non gravida vulputate. Mauris ut lobortis mauris. Sed suscipit metus tellus, quis sollicitudin metus mattis ac. Maecenas eget arcu purus. Pellentesque elementum magna id mauris facilisis ultricies. Vivamus a lacus vehicula, placerat ex et, placerat enim. Duis eget congue nibh."}</Text>

              <Text style={Styles.heading}>{"Lorem ipsum dolor sit amet."}</Text>

              <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus erat quis ligula iaculis cursus. Cras aliquet tempus diam. Sed interdum metus non gravida vulputate. Mauris ut lobortis mauris. Sed suscipit metus tellus, quis sollicitudin metus mattis ac. Maecenas eget arcu purus. Pellentesque elementum magna id mauris facilisis ultricies. Vivamus a lacus vehicula, placerat ex et, placerat enim. Duis eget congue nibh."}</Text>
              <Text style={Styles.describe}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus erat quis ligula iaculis cursus. Cras aliquet tempus diam. Sed interdum metus non gravida vulputate. Mauris ut lobortis mauris. Sed suscipit metus tellus, quis sollicitudin metus mattis ac. Maecenas eget arcu purus. Pellentesque elementum magna id mauris facilisis ultricies. Vivamus a lacus vehicula, placerat ex et, placerat enim. Duis eget congue nibh."}</Text>

            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    )
  }
}
export default EachProgram;