import React from 'react';
import * as redux from 'react-redux';
import TestRenderer,{act} from 'react-test-renderer';
import MusicAppHome from "../components/MusicAppHome"
import MusicAppService from '../service/MusicAppService';

const mockNavigate = jest.fn();
const mockDispatch=jest.fn();
jest.mock('../actions/MusicAppActions');
jest.mock('../service/MusicAppService')
jest.mock('@react-navigation/native', () => (
{ useNavigation: () => ({ navigate: mockNavigate }) }));

afterEach(() => {
  jest.resetAllMocks();
});

const DispatchMock = jest.spyOn(redux, 'useDispatch'); 
const SelectorMock = jest.spyOn(redux,'useSelector');

const DummyDataSet1 ={"Singer":"DSP","error":""}
const DummyDataSet2 ={"Singer":"DSP","error":"Rejected"}

it('Testing for default Text & textbox for entering singer name', async () => {
 DispatchMock.mockReturnValue(mockDispatch);
 SelectorMock.mockReturnValueOnce(DummyDataSet1.error);
 SelectorMock.mockReturnValueOnce(DummyDataSet1.Singer);
 MusicAppService.mockReturnValueOnce("www");
 var tree;
 await act(async () => {
 tree = TestRenderer.create(
 <MusicAppHome />
 )})
 const instance=tree.root;
 expect(instance.findByProps({testID:'DefaultText'})).toBeTruthy();
 expect(instance.findByProps({testID:'SingerName'})).toBeTruthy();
})


it('Testing for Error Text', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyDataSet2.error);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.Singer);
  MusicAppService.mockReturnValueOnce("kkk");
  var tree;
  await act(async () => {
  tree = TestRenderer.create(
  <MusicAppHome />
  )})
  const instance=tree.root;
  expect(instance.findByProps({testID:'ErrorText'})).toBeTruthy();

 })



 it('Testing Navigation', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.error);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.Singer);
  MusicAppService.mockReturnValueOnce({results:[{"name":"sss"}]});
  var tree;
  await act(async () => {
  tree = TestRenderer.create(
  <MusicAppHome />
  )})
  const instance=tree.root;
  expect(mockNavigate).toHaveBeenCalledTimes(0);
  const wrapper = instance.findAllByProps({testID: 'NavigationID'});
  await act(async () => {
  wrapper[0].props.onPress();
  });

 expect(mockNavigate).toHaveBeenCalledTimes(1);

 })


// it('When Api crashes', async () => {
//  DispatchMock.mockReturnValue(mockDispatch);
//  SelectorMock.mockReturnValueOnce(dummyDataSet);
//  SelectorMock.mockReturnValueOnce("Rejected");
//  var tree;
//  await act(async () => {
//  tree = TestRenderer.create(
//  <EarthquakeTrackerApp />
//  );
//  });
//  const instance=tree.root;
//  expect(instance.findByProps({testID:'Error'})).toBeTruthy();
// })

// it('Test for checking the navigation calling', async () => {
//   DispatchMock.mockReturnValue(mockDispatch);
//   SelectorMock.mockReturnValueOnce(dummyDataSet);
//   SelectorMock.mockReturnValueOnce("");
//   var tree;
//   await act(async () => {
//   tree = TestRenderer.create(
//   <EarthquakeTrackerApp />
//   );
//   });
//  //console.log(tree.toJSON().children[0]);
//   const instance = tree.root;
//   expect(mockNavigate).toHaveBeenCalledTimes(0);
//   const wrapper = instance.findAllByProps({testID: 'NavigationOnPress'});
//   await act(async () => {
//   wrapper[0].props.onPress();
//   });
//   expect(mockNavigate).toHaveBeenCalledTimes(1);
// })

