
import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import MusicAppItemDetails from '../components/MusicAppItemDetails';

afterEach(() => {
  jest.clearAllMocks();
});

const DummyData={"artworkUrl100":"","artistName":"","collectionPrice":"","collectionName":"","trackRentalPrice":"","country":"","currency":""}

const SelectorMock = jest.spyOn(redux,'useSelector');

it('Test for checking 3rd screen', async () => {
SelectorMock.mockReturnValueOnce(DummyData);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<MusicAppItemDetails />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'ItemImage'})).toBeTruthy();
  expect(instance.findByProps({testID: 'ArtistName'})).toBeTruthy();
    expect(instance.findByProps({testID: 'CollectionName'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Price'})).toBeTruthy();
    expect(instance.findByProps({testID: 'Rent'})).toBeTruthy();
    expect(instance.findByProps({testID: 'country'})).toBeTruthy();
    expect(instance.findByProps({testID: 'currency'})).toBeTruthy();

});

