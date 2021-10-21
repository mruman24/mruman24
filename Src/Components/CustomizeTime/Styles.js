import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center'
  },
  alarmeWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White
  },
  closeButton: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 5
  },
  close: {
    width: 28.28,
    height: 28.28
  },
  repeatAlarm: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.3,
    alignSelf: 'center'
  },
  timerContainer: {
    flexDirection: 'row',
    width: widthScreen / 1.34,
    alignSelf: 'center',
    height: 39,
    borderBottomWidth: 1,
    borderColor: Colors.DarkBlue,
    marginTop: 10
  },
  wrapper: {
    flexDirection: 'row',
    width: 100,
    height: 28,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginEnd: 15
  },
  minutes: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.DarkGrey
  },
  hours: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.DarkGrey
  },
  arrow: {
    width: 15,
    height: 8.75
  },
  repeatDays: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.3,
    alignSelf: 'center',
    marginTop: 30
  },
  daysAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 30
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: Colors.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  alphabet: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.White
  },
  validationAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.36,
    alignSelf: 'center',
    alignItems: 'center'
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
  daily: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 10
  },
  endsIn: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.34,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 15
  },
  never: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    marginLeft: 20
  },
  digitWrapper: {
    flexDirection: 'row',
    width: 40,
    height: 28,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  endsinOption: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey
  },
  submitButton: {
    width: 58,
    height: 58,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30
  }
});
export default styles;