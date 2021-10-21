import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

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
  bulaVirtual: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20
  },
  bulletWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple
  },
  chemistry: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: '80%',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alphabetContainer: {
    width: 25,
    height: 25,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  alphabet: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.Black
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.Grey,
    marginLeft: 5
  },
  approval: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginTop: 8
  },
  controller: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginBottom: 10
  },


  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    width: widthScreen,
    height: heightScreen,
    backgroundColor: Colors.White
  },
  flexDirection: {
    flexDirection: 'row',
    width: widthScreen / 1.1,
    alignSelf: 'center'
  },
  informacoes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginTop: 20
  },
  bula: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginTop: 20,
    marginLeft: 50
  },
  bar: {
    width: 103,
    height: 1,
    marginLeft: 120,
    marginTop: 10,
    marginBottom: 15
  },
  principlesWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple,
    marginTop: 25
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginTop: 16,
    marginBottom: 16
  },
  topDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginBottom: 18
  },
  bottomDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginBottom: 35
  },
  laboratoryWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple,
    marginTop: 25,
    marginBottom: 80
  },
  laboratoryTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.DarkGrey,
    marginLeft: 15,
    marginBottom: 65
  },
  query: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: '80%',
    marginLeft: 22,
    marginTop: 25
  },
  describe: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.DarkGrey,
    textAlign: 'justify',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 10
  }
});
export default styles;