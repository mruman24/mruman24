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
  alignPages: {
    flexDirection: 'row',
    width: widthScreen / 1.4,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10
  },
  symptoms: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  history: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 52
  },
  viewPager: {
    flex: 1,
    width: widthScreen
  },
  slider: {
    width: 100,
    height: 1,
    marginLeft: 40
  },
  interogate: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10
  },
  arrow: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  dropdown: {
    alignSelf: 'center'
  },
  line: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.DarkBlue,
    height: 2,
    marginTop: 10
  },
  painIntensity: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 40,
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  levelContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.purple,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 18
  },
  level: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.DarkGrey,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 25,
    marginBottom: 10
  },
  observe: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 6
  },
  observeContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 93,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.DarkGrey
  },
  input: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    margin: 10
  },
  button: {
    width: 170,
    height: 48,
    backgroundColor: Colors.DarkBlue,
    borderRadius: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.White,
  },
  slider_History: {
    width: 125,
    height: 1,
    marginLeft: 144
  },
  observationAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 25
  },
  appointment: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: '80%'
  },
  diseaseContainer: {
    width: 30,
    height: 30,
    backgroundColor: Colors.DarkBlue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disease: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.White
  },
  observation: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center'
  }
});
export default styles;