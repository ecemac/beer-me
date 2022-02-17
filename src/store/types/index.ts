import { IBeerResponse } from "../../types";

export const RANDOM_BEER_LOADING = "RANDOM_BEER_LOADING";
export const RANDOM_BEER_SUCCESS = "RANDOM_BEER_SUCCESS";
export const RANDOM_BEER_ERROR = "RANDOM_BEER_ERROR";

export const RANDOM_NA_BEER_LOADING = "RANDOM_NA_BEER_LOADING";
export const RANDOM_NA_BEER_SUCCESS = "RANDOM_NA_BEER_SUCCESS";
export const RANDOM_NA_BEER_ERROR = "RANDOM_NA_BEER_ERROR";

export const SEARCH_BEER_NAME_LOADING = "SEARCH_BEER_NAME_LOADING";
export const SEARCH_BEER_NAME_SUCCESS = "SEARCH_BEER_NAME_SUCCESS";
export const SEARCH_BEER_NAME_ERROR = "SEARCH_BEER_NAME_ERROR";

export const SEARCH_BEER_DATE_LOADING = "SEARCH_BEER_DATE_LOADING";
export const SEARCH_BEER_DATE_SUCCESS = "SEARCH_BEER_DATE_SUCCESS";
export const SEARCH_BEER_DATE_ERROR = "SEARCH_BEER_DATE_ERROR";

export interface RandomBeerLoading {
  type: typeof RANDOM_BEER_LOADING;
}

export interface RandomBeerSuccess {
  type: typeof RANDOM_BEER_SUCCESS;
  payload: IBeerResponse;
}

export interface RandomBeerError {
  type: typeof RANDOM_BEER_ERROR;
}

export interface RandomNABeerLoading {
  type: typeof RANDOM_NA_BEER_LOADING;
}

export interface RandomNABeerSuccess {
  type: typeof RANDOM_NA_BEER_SUCCESS;
  payload: IBeerResponse[];
}

export interface RandomNABeerError {
  type: typeof RANDOM_NA_BEER_ERROR;
}

export interface SearchBeerNameLoading {
  type: typeof SEARCH_BEER_NAME_LOADING;
}

export interface SearchBeerNameSuccess {
  type: typeof SEARCH_BEER_NAME_SUCCESS;
  payload: IBeerResponse[];
}

export interface SearchBeerNameError {
  type: typeof SEARCH_BEER_NAME_ERROR;
}

export interface SearchBeerDateLoading {
  type: typeof SEARCH_BEER_DATE_LOADING;
}

export interface SearchBeerDateSuccess {
  type: typeof SEARCH_BEER_DATE_SUCCESS;
  payload: IBeerResponse[];
}

export interface SearchBeerDateError {
  type: typeof SEARCH_BEER_DATE_ERROR;
}

export type RandomBeerDispatchTypes =
  | RandomBeerLoading
  | RandomBeerSuccess
  | RandomBeerError
  | RandomNABeerLoading
  | RandomNABeerSuccess
  | RandomNABeerError;

export type SearchBeerDispatchTypes =
  | SearchBeerNameLoading
  | SearchBeerNameSuccess
  | SearchBeerNameError
  | SearchBeerDateLoading
  | SearchBeerDateSuccess
  | SearchBeerDateError;
