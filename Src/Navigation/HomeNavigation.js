import { createStackNavigator } from 'react-navigation-stack';
// import MainContainer from './BottomTabNavigation';
import Login from '../Screens/Authentication/Login';
import CPF from '../Screens/Authentication/CPF';
import Profile from '../Screens/Profile';
import ProfileRegistration from '../Screens/Authentication/ProfileRegistration';
import ProfilePreview from '../Screens/ProfilePreview';
import Perfil from '../Screens/Perfil';
import Medicamentos from '../Screens/Medicamentos';
import Alarmes from '../Screens/Alarmes';
import BulaVirtual from '../Screens/BulaVirtual';
import DeliveryStatus from '../Screens/DeliveryStatus';
import MainTratamento from '../Screens/Tratamento/MainTratamento';
import ProgramInformation from '../Screens/Tratamento/ProgramInformation';
import EachProgram from '../Screens/Tratamento/EachProgram';
import Sintomas from '../Screens/Tratamento/Sintomas';
import OutrosSintomas from '../Screens/Tratamento/OutrosSintomas';
import EachSintomas from '../Screens/Tratamento/EachSintomas';
import MainProcedimentos from '../Screens/Procedimentos/MainProcedimentos';
import AuthorizeSchedule from '../Screens/Procedimentos/AuthorizeSchedule';
import EachSchedule from '../Screens/Procedimentos/EachSchedule';
import SchedulingHistory from '../Screens/Procedimentos/SchedulingHistory';

const HomeNavigation = createStackNavigator(
  {
    // main: { screen: MainContainer }
    Login: { screen: Login },
    CPF: { screen: CPF },
    Profile: { screen: Profile },
    ProfileRegistration: { screen: ProfileRegistration },
    ProfilePreview: { screen: ProfilePreview },
    Perfil: { screen: Perfil },
    Medicamentos: { screen: Medicamentos },
    Alarmes: { screen: Alarmes },
    BulaVirtual: { screen: BulaVirtual },
    DeliveryStatus: { screen: DeliveryStatus },
    MainTratamento: { screen: MainTratamento },
    ProgramInformation: { screen: ProgramInformation },
    EachProgram: { screen: EachProgram },
    Sintomas: { screen: Sintomas },
    OutrosSintomas: { screen: OutrosSintomas },
    EachSintomas: { screen: EachSintomas },
    MainProcedimentos: { screen: MainProcedimentos },
    AuthorizeSchedule: { screen: AuthorizeSchedule },
    EachSchedule: { screen: EachSchedule },
    SchedulingHistory: { screen: SchedulingHistory }
  },

  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
    mode: 'modal',

  },
);
export default HomeNavigation;
