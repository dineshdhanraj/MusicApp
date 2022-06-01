import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import MusicAppReducer from "../reducer/MusicAppReducer";

const middleware=[thunk]

const EarthquakeStore=createStore(
   MusicAppReducer,
   applyMiddleware(...middleware)
);

export default EarthquakeStore;