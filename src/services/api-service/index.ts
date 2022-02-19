import axios from "axios";
import { API_BASE_URL } from "../config";
import { IBeerResponse } from "../../types";

const client = axios.create({
  baseURL: API_BASE_URL,
});

export const RandomBeerService = {
  getAlcoholicRandomBeer: async (): Promise<IBeerResponse> => {
    return client
      .get("/random")
      .then((res) => {
        return res.data[0];
      })
      .catch((e) => {
        console.log(e.request);
      });
  },

  getNonAlcoholicRandomBeer: async (): Promise<IBeerResponse[]> => {
    return client
      .get("", {
        params: {
          abv_lt: 1,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e.request);
      });
  },

  getBeerByIdRequest: async (id: number): Promise<IBeerResponse> => {
    return client
      .get(`/${id}`)
      .then((res) => {
        return res.data[0];
      })
      .catch((e) => {
        console.log(e.request);
      });
  },
};

export const SearchBeerService = {
  searchBeersByName: async (beer_name: string): Promise<IBeerResponse[]> => {
    return client
      .get("", {
        params: {
          beer_name,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e.request);
      });
  },

  searchBeersByBrewedBefore: async (
    brewed_before: string
  ): Promise<IBeerResponse[]> => {
    return client
      .get("", {
        params: {
          brewed_before,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e.request);
      });
  },
};
