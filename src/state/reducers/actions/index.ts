import { AsteroidDataActionTypes } from "../../action-types";
import { AsteroidDataModel } from "../../../models/asteroidDataModel";

interface SearchAsteroidAction {
  type: AsteroidDataActionTypes.SEARCH_ASTEROID;
}
interface SearchAsteroidSuccessAction {
  type: AsteroidDataActionTypes.SEARCH_ASTEROID_SUCCESS;
  payload: AsteroidDataModel;
}
interface SearchAsteroidErrorAction {
  type: AsteroidDataActionTypes.SEARCH_ASTEROID_ERROR;
  payload: string;
}

export type AsteroidDataActions =
  | SearchAsteroidAction
  | SearchAsteroidSuccessAction
  | SearchAsteroidErrorAction;
