import * as Actions from "../constants/MusicAppConstants"

const initialDetails={
    Data:"",
    Singer:"",
    error:"",
    ListItemDetails:"",
 }
 export default function MusicAppReducer(state=initialDetails, action) 
{
  
  switch (action.type) {
    case Actions.DataDetails:
      return { ...state, Data: action.payload };
    case Actions.Singer:
      return { ...state,Singer: action.payload };  
    case Actions.Error:
      return { ...state, error: action.payload };
    case Actions.ItemData:
        return { ...state, ListItemDetails: action.payload };  
    default:
     return state;
  }
}
