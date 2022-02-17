import {
  RANDOM_BEER_LOADING,
  RANDOM_BEER_SUCCESS,
  RANDOM_BEER_ERROR,
  RANDOM_NA_BEER_LOADING,
  RANDOM_NA_BEER_SUCCESS,
  RANDOM_NA_BEER_ERROR,
  RandomBeerDispatchTypes,
} from "../types";

import { IBeerResponse } from "../../types";

interface IInitialState {
  data: IBeerResponse | IBeerResponse[] | null;
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
      return { ...state, loading: true };
    case RANDOM_BEER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        type: "alcoholic",
        loading: false,
      };
    case RANDOM_BEER_ERROR:
      return { ...state, loading: false, error: true };
    case RANDOM_NA_BEER_LOADING:
      return { ...state, loading: true };
    case RANDOM_NA_BEER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        type: "nonalcoholic",
        loading: false,
      };
    case RANDOM_NA_BEER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default randomBeersReducer;
