import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  container: {
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  termos: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginTop: 30,
    marginBottom: 15
  },
  describe: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    textAlign: 'justify'
  },
  validationAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  validation: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10
  },
  checkWrapper: {
    backgroundColor: Colors.lightGrey,
    width: 20,
    height: 20
  },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: Colors.lightGrey
  },
  check: {
    width: 25,
    height: 19.41
  },
  completeSign: {
    alignSelf: 'center',
    marginTop: 40
  },
  vector: {
    width: 58,
    height: 58
  }
});
export default styles;