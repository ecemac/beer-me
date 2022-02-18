import {
  SEARCH_BEER_NAME_LOADING,
  SEARCH_BEER_NAME_SUCCESS,
  SEARCH_BEER_NAME_ERROR,
  SEARCH_BEER_DATE_LOADING,
  SEARCH_BEER_DATE_SUCCESS,
  SEARCH_BEER_DATE_ERROR,
  SearchBeerDispatchTypes,
} from "../types";

import { IBeerResponse } from "../../types";

interface IInitialState {
  data: IBeerResponse[] | null;
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: null,
  loading: false,
  error: false,
};

const searchBeersReducer = (
  state: IInitialState = initialState,
  action: SearchBeerDispatchTypes
): IInitialState => {
  switch (action.type) {
    case SEARCH_BEER_NAME_LOADING:
      return { ...state, data: null, loading: true };
    case SEARCH_BEER_NAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SEARCH_BEER_NAME_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SEARCH_BEER_DATE_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
      };
    case SEARCH_BEER_DATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SEARCH_BEER_DATE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default searchBeersReducer;
