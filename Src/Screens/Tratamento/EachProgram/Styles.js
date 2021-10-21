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
  addition: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  contentWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple,
    marginBottom: 40
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20
  },
  oQue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 20
  },
  describe: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.DarkGrey,
    width: '87%',
    alignSelf: 'center',
    textAlign: 'justify',
    marginBottom: 30
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 20,
    marginBottom: 10
  }
});
export default styles;