import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

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
  infoProgram: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  pathology: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginBottom: 15
  },
  wrapper: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 73,
    backgroundColor: Colors.purple,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  feature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 20
  },
  addition: {
    width: 30,
    height: 30,
    marginRight: 20
  }
});
export default styles;