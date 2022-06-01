import { ListSelector,ErrorSelector,ItemDetailsSelector,SingerSelector } from "../selectors/MusicAppselectors";
const DummyData = {"Data":"List","Singer":"Devi","error":"Rejected","ListItemDetails":"ItemDetails"}

it('Testing Error Data Case', () => {
  const result = ErrorSelector(DummyData);
  expect(result).toEqual("Rejected");
});

it('Testing Listing functionality', () => {
  const result = ListSelector(DummyData);
  expect(result).toEqual("List");
});

it('Testing Listing functionality', () => {
    const result = SingerSelector(DummyData);
    expect(result).toEqual("Devi");
  });

it('Testing Item Details functionality', () => {
  const result = ItemDetailsSelector(DummyData);
  expect(result).toEqual("ItemDetails");
});


