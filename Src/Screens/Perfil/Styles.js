import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  iconAlign: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 30
  },
  icon: {
    width: 30,
    height: 30
  },
  logo: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginTop: 10
  },
  editarAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  editar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1465CC'
  },
  direction: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 15
  },
  default: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  user: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey
  },
  allergies: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: '80%'
  },
  address: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: '70%'
  }
});
export default styles;