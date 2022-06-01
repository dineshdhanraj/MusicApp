import * as Actions from "../constants/MusicAppConstants"
import MusicAppReducer from "../reducer/MusicAppReducer"
const initialState = {
    Data:"",
    Singer:"",
    Error:"",
    ListItemDetails:"",
};
const DummyData = {"Data":"List","Singer":"Devi","error":"Rejected","ListItemDetails":"ItemDetails"}

  it('Testing Data Dispatching ', () => {
    const result = MusicAppReducer(initialState, {type:Actions.DataDetails, payload:DummyData.Data});
    expect(result.Data).toEqual(DummyData.Data);
  });
  it('Testing Singer Data', () => {
    const result = MusicAppReducer(initialState, {type:Actions.Singer, payload: DummyData.Singer});
    expect(result.Singer).toEqual(DummyData.Singer);
  });
  it('Testing Error Data', () => {
    const result = MusicAppReducer(initialState, {type:Actions.Error, payload: DummyData.error});
    expect(result.error).toEqual(DummyData.error);
  });
  it('Testing Item Screen Details', () => {
    const result = MusicAppReducer(initialState, {type:Actions.ItemData, payload: DummyData.ListItemDetails});
    expect(result.ListItemDetails).toEqual(DummyData.ListItemDetails);
  });