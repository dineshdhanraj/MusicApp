import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import * as Actions from "../constants/MusicAppConstants"
import styles from './MusicAppStyles';
import MusicAppUrl from '../config/MusicAppUrl'
import MusicAppService from "../service/MusicAppService"
import { useDispatch,useSelector } from 'react-redux';
import { ListAction, ErrorAction } from '../actions/MusicAppActions';
import {ErrorSelector,SingerSelector} from "../selectors/MusicAppselectors"

export default function MusicAppHome() {

  const ErrorDetails=useSelector((state)=>ErrorSelector(state));
 const SingerName=useSelector((state)=>SingerSelector(state));
  const dispatch=useDispatch();
  const navigation = useNavigation();

  async function load(url)
  {
   const List=await MusicAppService(url)
   if(SingerName=="")
    dispatch(ErrorAction("Singer can't be empty"))
    else if(List.ErrorMessage)
    dispatch(ErrorAction(List.ErrorMessage));
    else if(List.results)
    {
        dispatch(ListAction(List));
        if(List.results.length>0)
       { navigation.navigate("ListDetailsScreen");
       dispatch(ErrorAction(""))}
        else 
        dispatch(ErrorAction("No Data Found"))
    }
    
}

  return (
    <View style={styles.MainContent}>
<Text style={styles.Default} testID="DefaultText">Search your favourite musician:</Text>

      <View style={styles.MarginTop}> 
        <TextInput
          style={styles.Texter}
          testID="SingerName"
          placeholder="Enter Singer Name"
          onChangeText={(text) => dispatch({ type:Actions.Singer, payload: text })}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5} 
        style={styles.custom}
        testID="NavigationID"
        onPress={async () => {
        load(MusicAppUrl(SingerName))
        }}
      >
        <Text style={styles.Button} textId="SearchId">
          Search
        </Text>
      </TouchableOpacity>

          {ErrorDetails? (
            <View style={styles.NotAvailable}>
              <Text style={styles.Error} testID='ErrorText'>{ErrorDetails}</Text>
            </View>
          ) : <></>}
    </View>
  );
}
