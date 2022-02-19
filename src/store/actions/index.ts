import {
  RANDOM_BEER_LOADING,
  RANDOM_BEER_SUCCESS,
  RANDOM_BEER_ERROR,
  RANDOM_NA_BEER_LOADING,
  RANDOM_NA_BEER_SUCCESS,
  RANDOM_NA_BEER_ERROR,
  SEARCH_BEER_NAME_LOADING,
  SEARCH_BEER_NAME_SUCCESS,
  SEARCH_BEER_NAME_ERROR,
  SEARCH_BEER_DATE_LOADING,
  SEARCH_BEER_DATE_SUCCESS,
  SEARCH_BEER_DATE_ERROR,
  RandomBeerDispatchTypes,
  SearchBeerDispatchTypes,
  GET_BEER_BY_ID_LOADING,
  GET_BEER_BY_ID_SUCCESS,
  GET_BEER_BY_ID_ERROR,
} from "../types";

import { IBeerResponse } from "../../types";
import {
  RandomBeerService,
  SearchBeerService,
} from "../../services/api-service";
import { Dispatch } from "redux";

export const getRandomBeersAction =
  () => async (dispatch: Dispatch<RandomBeerDispatchTypes>) => {
    try {
      dispatch({
        type: RANDOM_BEER_LOADING,
      });

      const res: IBeerResponse =
        await RandomBeerService.getAlcoholicRandomBeer();

      dispatch({
        type: RANDOM_BEER_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: RANDOM_BEER_ERROR,
      });
    }
  };

export const getRandomNABeersAction =
  () => async (dispatch: Dispatch<RandomBeerDispatchTypes>) => {
    try {
      dispatch({
        type: RANDOM_NA_BEER_LOADING,
      });

      const res: IBeerResponse[] =
        await RandomBeerService.getNonAlcoholicRandomBeer();

      dispatch({
        type: RANDOM_NA_BEER_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: RANDOM_NA_BEER_ERROR,
      });
    }
  };

export const getBeerByIdAction =
  (id: number) => async (dispatch: Dispatch<RandomBeerDispatchTypes>) => {
    try {
      dispatch({
        type: GET_BEER_BY_ID_LOADING,
      });

      const res: IBeerResponse = await RandomBeerService.getBeerByIdRequest(id);

      dispatch({
        type: GET_BEER_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: GET_BEER_BY_ID_ERROR,
      });
    }
  };

export const searchBeersByNameAction =
  (beer_name: string) =>
  async (dispatch: Dispatch<SearchBeerDispatchTypes>) => {
    try {
      dispatch({
        type: SEARCH_BEER_NAME_LOADING,
      });

      const res: IBeerResponse[] = await SearchBeerService.searchBeersByName(
        beer_name
      );

      dispatch({
        type: SEARCH_BEER_NAME_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: SEARCH_BEER_NAME_ERROR,
      });
    }
  };

export const searchBeersByDateAction =
  (brewed_before: string) =>
  async (dispatch: Dispatch<SearchBeerDispatchTypes>) => {
    try {
      dispatch({
        type: SEARCH_BEER_DATE_LOADING,
      });

      const res: IBeerResponse[] =
        await SearchBeerService.searchBeersByBrewedBefore(brewed_before);

      dispatch({
        type: SEARCH_BEER_DATE_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: SEARCH_BEER_DATE_ERROR,
      });
    }
  };
