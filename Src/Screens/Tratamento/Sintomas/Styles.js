import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  align: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20
  },
  back: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  alignPages: {
    flexDirection: 'row',
    width: widthScreen / 1.4,
    alignSelf: 'center',
    marginTop: 15
  },
  deliveryStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  history: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 52
  },
  viewPager: {
    flex: 1
  },
  sintomas: {
    justifyContent: 'flex-start'
  },
  slider: {
    width: 100,
    height: 1,
    marginLeft: 36,
    marginTop: 10
  },
  interogate: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 18
  },
  symptomsAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  alignItems: {
    width: 86,
    alignItems: 'center'
  },
  symptoms: {
    width: 70,
    height: 70,
    marginBottom: 10
  },
  symptomTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.DarkGrey,
    textAlign: 'center'
  },
  difficultSwallowing: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: 71,
    textAlign: 'center'
  },
  historico: {
    justifyContent: 'flex-start'
  },
  slider_History: {
    width: 125,
    height: 1,
    marginLeft: 140,
    marginTop: 10
  }
});
export default styles;