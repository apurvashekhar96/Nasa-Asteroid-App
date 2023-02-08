import { combineReducers } from "redux";

import { AsteroidDataReducer } from "./AsteroidDataReducer";

const reducers = combineReducers({
  asteroidData: AsteroidDataReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
