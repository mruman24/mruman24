import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  listHorizontal: {
    width: widthScreen,
    justifyContent: 'flex-end'
  },
  credentialAlign: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  credential: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  InputWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 43,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Blue
  },
  textInput: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 16
  },
  completeSign: {
    alignSelf: 'center',
    marginTop: 15
  },
  vector: {
    width: 58,
    height: 58
  },
  paginationWrapper: {
    flexDirection: 'row',
    width: widthScreen / 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '30%',
    marginBottom: '50%'
  },
  paginationDots: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#85E1FF'
  },

  // Password
  validation: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Grey,
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  passwordWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 43,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Black,
    marginTop: 10,
    marginBottom: 8
  },
  completePassword: {
    alignSelf: 'center',
    marginTop: 50
  },
});
export default styles;