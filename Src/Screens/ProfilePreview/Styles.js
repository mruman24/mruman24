import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 50
  },
  direction: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  align: {
    alignItems: 'center'
  },
  icon: {
    width: 85,
    height: 85,
    marginBottom: 8
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.DarkGrey
  },

  // Modal
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue
  },
  blind: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.lightBlue,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 50
  },
  perfil: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  tagPerfil: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.White
  },
  indicator: {
    width: 50,
    height: 50,
    marginLeft: 28
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.White,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 32
  }
});
export default styles;