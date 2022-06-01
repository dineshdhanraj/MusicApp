import { ListAction,ErrorAction } from "../actions/MusicAppActions";

const mockDispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

it('When Data Fetches Correctly', async () => {
await ListAction("")(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('When Data Fetches Wrongly', async () => {
  await ErrorAction("")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

