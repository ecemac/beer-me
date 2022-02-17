export interface IValueUnit {
  value: number;
  unit: string;
}

export interface IHops {
  name: string;
  amount: IValueUnit;
  add: string;
  attribute: string;
}

export interface IBeerResponse {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: IValueUnit;
  boil_volume: IValueUnit;
  method: {
    mash_temp: [
      {
        temp: IValueUnit;
        duration: number;
      }
    ];
    fermentation: {
      temp: IValueUnit;
    };
    twist: string;
  };
  ingredients: {
    malt: [
      {
        name: string;
        amount: IValueUnit;
      }
    ];
    hops: IHops[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
