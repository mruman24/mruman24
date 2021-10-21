import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  logo: {
    width: 248,
    height: 95,
    alignSelf: 'center',
    marginTop: 40
  },
  login: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 30
  },
  senha: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 12
  },
  InputWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 43,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Blue,
    marginTop: 8
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Grey,
    marginLeft: 10
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.Red,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 15
  },
  logarButton: {
    width: '50%',
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    borderRadius: 24,
    marginTop: 30
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.White
  },
  registerButton: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    borderRadius: 24,
    marginTop: 12
  },
  validationAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  validation: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  checkWrapper: {
    backgroundColor: Colors.lightGrey,
    width: 20,
    height: 20,
    marginLeft: 10
  },
  checked: {
    backgroundColor: Colors.lightGrey,
    width: 20,
    height: 20,
    marginLeft: 10
  },
  check: {
    width: 25,
    height: 19.41
  }
});
export default styles;