import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicAppListDetails from "../components/MusicAppListDetails";
import MusicAppItemDetails from "../components/MusicAppItemDetails";
import MusicAppHome from "../components/MusicAppHome";
import { useSelector } from "react-redux";
import { ItemDetailsSelector, SingerSelector } from "../selectors/MusicAppselectors";
const Stack=createNativeStackNavigator();

const MusicAppStackNavigator=()=>{
    const SingerName=useSelector((state)=>SingerSelector(state))
    const TrackName=useSelector((state)=>ItemDetailsSelector(state))
return(
   <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name={"Home"} component={MusicAppHome} options={{title:'My Music',headerTitleAlign:'center',headerStyle:{backgroundColor:'white'},headerTitleStyle:{fontSize:25,fontWeight:'bold'}}}/>
        <Stack.Screen name={"ListDetailsScreen"} component={MusicAppListDetails} options={{ title:SingerName,
          headerTitleStyle: {
           fontSize:15
          },
          headerStyle: {
            backgroundColor: '#f4511e',
          }}}/>
           <Stack.Screen name={"ItemDetails"} component={MusicAppItemDetails} options={{title:TrackName.trackName,headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },headerStyle:{backgroundColor:'white'},headerTitleStyle:{fontSize:12,fontWeight:'bold'}}}/>
        </Stack.Navigator>
</NavigationContainer>
    )
}
export default MusicAppStackNavigator;

