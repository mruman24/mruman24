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
  medicamentos: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.Grey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20
  },
  featuresAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  align: {
    width: 85,
    alignItems: 'center'
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 8
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.Grey,
    width: '80%',
    textAlign: 'center'
  }
});
export default styles;