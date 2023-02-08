import { AsteroidDataModel } from "../../models/asteroidDataModel";
import { AsteroidDataActions } from "./actions";
import { AsteroidDataActionTypes } from "../action-types";

interface AsteroidDataState {
  loading: boolean;
  error: string | null;
  data: AsteroidDataModel;
}

const initialStateData = {
  loading: false,
  error: null,
  data: {
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: null,
  },
};

const AsteroidDataReducer = (
  state: AsteroidDataState = initialStateData,
  action: AsteroidDataActions
): AsteroidDataState => {
  switch (action.type) {
    case AsteroidDataActionTypes.SEARCH_ASTEROID: {
      return { loading: true, error: null, data: initialStateData.data };
    }
    case AsteroidDataActionTypes.SEARCH_ASTEROID_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case AsteroidDataActionTypes.SEARCH_ASTEROID_ERROR: {
      return {
        loading: false,
        error: action.payload,
        data: initialStateData.data,
      };
    }
    default:
      return state;
  }
};

export { AsteroidDataReducer };
