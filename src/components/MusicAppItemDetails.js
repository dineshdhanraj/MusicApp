import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from './MusicAppStyles';
import { useSelector } from 'react-redux';
import { ItemDetailsSelector } from '../selectors/MusicAppselectors';
export default function MusicAppItemDetails() 
{

    const list=useSelector((state)=>ItemDetailsSelector(state));;
    return (
      <View>
      <View style={styles.MainContentView}>
        <Image style={styles.image} testID="ItemImage" source={{ uri: list.artworkUrl100 }} /> 
        <View style={styles.seperator}>
          <Text style={styles.Heading} >Artist</Text>
          <Text style={styles.textstyle} testID='ArtistName'>{list.artistName}</Text>
        </View>
        <View style={styles.seperator}>
          <Text style={styles.Heading}>Collection Name</Text>
          <Text style={styles.textstyle} testID='CollectionName'>{list.collectionName}</Text>
        </View>
        <View style={styles.seperator}>
          <Text style={styles.Heading} >Price</Text>
          <Text style={styles.textstyle} testID='Price'>{list.collectionPrice}</Text>
        </View>
        <View style={styles.seperator}>
          <Text style={styles.Heading} >Rent</Text>
          <Text style={styles.textstyle} testID='Rent'>{list.trackRentalPrice}</Text>
        </View>
        <View style={styles.seperator}>
          <Text style={styles.Heading} >Country</Text>
          <Text style={styles.textstyle} testID='country'>{list.country}</Text>
        </View>
        <View style={styles.seperator}>
          <Text style={styles.Heading} >Currency</Text>
          <Text style={styles.textstyle} testID='currency'>{list.currency}</Text>
        </View>
      
      </View>
      </View>
    );
  
  
}
//<Image style={styles.image} source={{ uri: Covid_Details.flag }} />
