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
  scheduleHistory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 25
  },
  wrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple
  },
  feature: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 8
  },
  doctor: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10
  },
  transportRequest: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 8
  },
  dateStatement: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Colors.DarkGrey,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 25
  }
});
export default styles;