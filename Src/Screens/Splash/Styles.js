import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 248,
    height: 95
  }
});
export default styles;