import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  selectUser: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 50
  },
  profilesAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 40
  },
  textAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-evenly'
  },
  icon: {
    width: 66,
    height: 66,
    marginBottom: 15
  },
  fulanoPaciente: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: 72,
    textAlign: 'center'
  },
  adicionarPerfil: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: 72,
    textAlign: 'center'
  },
  EmergencyAlign: {
    width: widthScreen / 1.12,
    alignItems: 'flex-end',
    marginTop: '50%'
  },
  align: {
    alignItems: 'center'
  },
  rescue: {
    width: 66,
    height: 66,
    marginBottom: 5
  },
  emergenciais: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  }
});
export default styles;