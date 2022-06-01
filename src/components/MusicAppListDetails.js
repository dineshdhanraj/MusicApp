import React from 'react';
import { Text, View, Image,FlatList,TouchableOpacity, ActionSheetIOS } from 'react-native';
import styles from './MusicAppStyles';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { ListSelector } from '../selectors/MusicAppselectors';
import * as Actions from "../constants/MusicAppConstants";
export default function MusicAppListDetails() 
{
    const ItemList=useSelector((state)=>ListSelector(state));
    const dispatch=useDispatch();
    const navigation = useNavigation();
    const ListDetails=({item})=>
    {     
    return(
        <TouchableOpacity testID="NavigationOnPress" onPress={()=>  {dispatch({type:Actions.ItemData,payload:item}),navigation.navigate('ItemDetails')}}>    
        <View style={styles.ListItemView}> 
        <Text style={styles.Tracker} testID='TrackID'>{item.trackName}</Text>
      </View>
    </TouchableOpacity>
          )
    }

    return (
      <View>
        <View style={styles.seperator}>
        <FlatList data={ItemList.results}
      
testID="List" 
renderItem={ListDetails}   
//keyExtractor={(item) => item.id}
/>
        </View>
      </View>
    );
  
  
}
