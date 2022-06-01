import React from 'react' 
import MusicAppStackNavigator from './src/navigation/MusicAppStackNavigation'
import MusicAppStore from "./src/store/MusicAppStore"
import { Provider } from 'react-redux';
export default function App(){
  return(
    <Provider store={MusicAppStore}>
  <MusicAppStackNavigator/>
    </Provider>
  
  )
}