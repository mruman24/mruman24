import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  align: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20
  },
  back: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  authorizeSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Grey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  wrapper: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 51,
    backgroundColor: Colors.purple,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  feature: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 20
  }
});
export default styles;