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
  direction: {
    flexDirection: 'row',
    width: widthScreen / 1.1,
    alignSelf: 'center',
    marginTop: 15
  },
  deliveryStatus: {
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
    flex: 1
  },
  statusdaEntrega: {
    justifyContent: 'flex-start'
  },
  slider: {
    width: 125,
    height: 1,
    marginLeft: 18,
    marginTop: 10
  },
  orderWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.purple,
    marginTop: 25
  },
  order: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 12
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginBottom: 12
  },
  program: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginBottom: 8
  },
  laboratory: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginBottom: 20
  },
  historico: {
    justifyContent: 'flex-start'
  },
  slider_History: {
    width: 125,
    height: 1,
    marginLeft: 160,
    marginTop: 10
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deliveryOn: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#295F20',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 12
  },
  medicieneTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginBottom: 25
  },


  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  wrapper: {
    width: widthScreen / 2,
    backgroundColor: Colors.purple,
    marginLeft: 20,
    marginTop: 25
  },
  orderNo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  stepIndicator: {
    flex: 1,
    paddingHorizontal: 34
  }
});
export default styles;