import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import MusicAppListDetails from '../components/MusicAppListDetails';
const mockNavigate = jest.fn();
const mockDispatch=jest.fn();
jest.mock('../actions/MusicAppActions');
jest.mock('@react-navigation/native', () => (
{ useNavigation: () => ({ navigate: mockNavigate }) }));

afterEach(() => {
  jest.clearAllMocks();
});

const DispatchMock = jest.spyOn(redux, 'useDispatch'); 
const SelectorMock = jest.spyOn(redux,'useSelector');
DispatchMock.mockReturnValue(mockDispatch);
const DummyData={results:[{"trackName":"DeviSriPrasad"}]}

it('Test for checking 2nd screen', async () => {
SelectorMock.mockReturnValueOnce(DummyData);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<MusicAppListDetails />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'List'})).toBeTruthy();
  expect(mockNavigate).toHaveBeenCalledTimes(0);
    const wrapper = instance.findAllByProps({testID: 'NavigationOnPress'});
  await act(async () => {
  wrapper[0].props.onPress();
  });
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(instance.findByProps({testID: 'TrackID'})).toBeTruthy();

});

