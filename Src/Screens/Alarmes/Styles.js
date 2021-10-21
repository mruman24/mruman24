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
  alarmes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
  },
  switch: {
    marginRight: 10
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 5
  },
  direction: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.Grey
  },
  edit: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  delete: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  bin: {
    width: 16.24,
    height: 20
  },
  excluirAlarme: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#952929',
    marginLeft: 10
  },
  arrow: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  line: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 2,
    backgroundColor: Colors.Black,
    marginTop: 10
  },
  adicionarOption: {
    width: 66,
    height: 66,
    alignSelf: 'center',
    marginTop: '45%',
    marginBottom: 15
  },
  adicionarAlarme: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    width: '30%',
    alignSelf: 'center',
    textAlign: 'center'
  },

  // Excluir Alarme Modal
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center'
  },
  deleteWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    justifyContent: 'center'
  },
  deleteDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40
  },
  deleteOptions: {
    flexDirection: 'row',
    width: widthScreen / 2.4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  sim: {
    fontSize: 24,
    fontWeight: '300',
    color: Colors.DarkGrey
  },
  nao: {
    fontSize: 24,
    fontWeight: '300',
    color: '#952929'
  },

  // Adicionar Alarme Modal
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
  detailsContainer: {
    width: widthScreen / 1.4,
    alignSelf: 'center',
    height: 28,
    borderBottomWidth: 1,
    borderColor: Colors.DarkBlue
  },
  textInput: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.Grey
  },
  timer: {
    fontSize: 72,
    fontWeight: '300',
    color: Colors.DarkGrey,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  days: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.DarkGrey,
    width: widthScreen / 1.4,
    alignSelf: 'center'
  },
  daysAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  alphabet: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  validationAlign: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30
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
  customizetime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    alignSelf: 'center',
    marginTop: 20
  },
  submitButton: {
    width: 58,
    height: 58,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50
  }
});
export default styles;