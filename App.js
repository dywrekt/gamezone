import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import ErrorBoundary from 'react-native-error-boundary'


const getFonts = () => Font.loadAsync({
    'Lacquer-regular': require('./assets/fonts/Lacquer-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });


export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
  return (
   <Navigator />
  );
} else {
  return (
  <AppLoading 
    startAsync={getFonts}
    onFinish={()=> setFontsLoaded(true)}
  />
  )
   }
}
