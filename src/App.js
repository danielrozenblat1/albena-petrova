import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import HeroSection from './screens/FirstScreenNew';
import SecondScreen from './screens/SecondScreen';
import AboutSection from './components/me/Me';
import NavBarNew from './components/CourseNav/NavBarNew';
import FloatingWhatsAppButton from './components/FloatingButton/FloatingButton';
import ThirdScreen from './screens/ThirdScreen';
import Steps from './components/steps/Steps';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  {/* <FirstScreen/> */}
  <NavBarNew/>
  <HeroSection/>
  <SecondScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  <FloatingWhatsAppButton/>
  <ByMe/>
  </>
}

export default App;
