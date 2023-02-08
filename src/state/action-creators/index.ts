import { AsteroidDataActions } from "../reducers/actions";
import { Dispatch } from "redux";
import { AsteroidDataActionTypes } from "../action-types";
import { AsteroidApiFunc } from "../../utils/api";

export const searchAsteroid = (term: number) => {
  return async (dispatch: Dispatch<AsteroidDataActions>) => {
    dispatch({
      type: AsteroidDataActionTypes.SEARCH_ASTEROID,
    });
    try {
      const data = await AsteroidApiFunc(term);
      dispatch({
        type: AsteroidDataActionTypes.SEARCH_ASTEROID_SUCCESS,
        payload: data.processedData,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: AsteroidDataActionTypes.SEARCH_ASTEROID_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
