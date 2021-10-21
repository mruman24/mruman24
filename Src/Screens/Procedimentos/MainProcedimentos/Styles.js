import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

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
  procedimentos: {
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
    marginTop: 40
  },
  align: {
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
    width: 94,
    textAlign: 'center'
  }
});
export default styles;