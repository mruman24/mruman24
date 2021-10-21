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
  authorizeSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Black,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 25
  },
  infusao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  voucher: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    alignSelf: 'center',
    marginTop: 20
  },
  input: {
    fontSize: 14,
    fontWeight: '500',
    color: '#C4C4C4'
  },
  line: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#C4C4C4',
    marginTop: 15
  },
  selectDoctor: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    alignSelf: 'center',
    marginTop: 20
  },
  arrow: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 20
  },
  lineDark: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.DarkBlue,
    marginTop: 15
  },
  button: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 51,
    backgroundColor: Colors.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: '30%'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.White
  }
});
export default styles;