import {
  RANDOM_BEER_LOADING,
  RANDOM_BEER_SUCCESS,
  RANDOM_BEER_ERROR,
  RANDOM_NA_BEER_LOADING,
  RANDOM_NA_BEER_SUCCESS,
  RANDOM_NA_BEER_ERROR,
  GET_BEER_BY_ID_LOADING,
  GET_BEER_BY_ID_SUCCESS,
  GET_BEER_BY_ID_ERROR,
  RandomBeerDispatchTypes,
} from "../types";

import { IBeerResponse } from "../../types";

interface IInitialState {
  data: IBeerResponse | null;
  type: string;
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: null,
  type: "",
  loading: false,
  error: false,
};

const randomBeersReducer = (
  state: IInitialState = initialState,
  action: RandomBeerDispatchTypes
): IInitialState => {
  switch (action.type) {
    case RANDOM_BEER_LOADING:
      return { ...state, data: null, loading: true };
    case RANDOM_BEER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        type: "Alcoholic",
        loading: false,
      };
    case RANDOM_BEER_ERROR:
      return { ...state, loading: false, error: true };
    case RANDOM_NA_BEER_LOADING:
      return { ...state, data: null, loading: true };
    case RANDOM_NA_BEER_SUCCESS:
      let randomBeer =
        action.payload[Math.floor(Math.random() * action.payload.length)];
      return {
        ...state,
        data: randomBeer,
        type: "Non-alcoholic",
        loading: false,
      };
    case RANDOM_NA_BEER_ERROR:
      return { ...state, loading: false, error: true };
    case GET_BEER_BY_ID_LOADING:
      return { ...state, data: null, loading: true };
    case GET_BEER_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        type: "",
        loading: false,
      };
    case GET_BEER_BY_ID_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default randomBeersReducer;
