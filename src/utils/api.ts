import axios from "axios";
import { AsteroidDataModel } from "../models/asteroidDataModel";
import { store } from "../state";
import { AsteroidDataActionTypes } from "../state/action-types";

export const AsteroidApiFunc = async (term: number) => {
  let processedData: AsteroidDataModel = {
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: null,
  };
  await axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/neo/${term}?api_key=6bVQ55OWVc5hz1j32JZozPYxcJI9vmkVOP2Gr5Mb`
    )
    .then((res: any) => {
      processedData.name = res.data.name;
      processedData.nasa_jpl_url = res.data.nasa_jpl_url;
      processedData.is_potentially_hazardous_asteroid =
        res.data.is_potentially_hazardous_asteroid;
    })
    .catch((err) => {
      const error = new Error(err);
      throw error;
    });
  return { processedData };
};

export const randomAsteroidApiFunc = async () => {
  let processedData: AsteroidDataModel = {
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: null,
  };
  await axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6bVQ55OWVc5hz1j32JZozPYxcJI9vmkVOP2Gr5Mb`
    )
    .then((res: any) => {
      const randNum = Math.floor(Math.random() * 25);
      const asteroid = res.data.near_earth_objects[randNum];
      processedData.name = asteroid.name;
      processedData.nasa_jpl_url = asteroid.nasa_jpl_url;
      processedData.is_potentially_hazardous_asteroid =
        asteroid.is_potentially_hazardous_asteroid;
    })
    .catch((err) => {
      const error = new Error(err);
      throw error;
    });
  store.dispatch({
    type: AsteroidDataActionTypes.SEARCH_ASTEROID_SUCCESS,
    payload: processedData,
  });
  return { processedData };
};
