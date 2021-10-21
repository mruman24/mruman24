import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  credentials: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 80
  },
  credential: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  nameInputWrapper: {
    justifyContent: 'center',
    height: 43,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.DarkGrey,
    marginTop: 8,
    marginBottom: 12
  },
  dateInputWrapper: {
    width: '50%',
    height: 43,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.DarkGrey,
    marginTop: 8,
    marginBottom: 12
  },
  InputWrapper: {
    width: '80%',
    height: 43,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.DarkGrey,
    marginTop: 8,
    marginBottom: 12
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 10
  },
  completeSign: {
    width: 58,
    height: 58,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Parrot,
    marginTop: 50
  },
  vector: {
    width: 25,
    height: 25
  }
});
export default styles;