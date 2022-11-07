export interface MovieResponseTypes {
  dates:         MovieResponseDatesTypes;
  page:          number;
  results:       MovieTypes[];
  total_pages:   number;
  total_results: number;
};

export interface MovieResponseDatesTypes {
  maximum: Date;
  minimum: Date;
};

export interface MovieTypes {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: MovieOriginalLanguageTypes;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
};

export enum MovieOriginalLanguageTypes {
  En = 'en',
  Fr = 'fr',
  Ja = 'ja',
  Ru = 'ru',
};

export interface MovieDetailsTypes {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: MovieDetailsBelongsToCollectionTypes;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  MovieDetailsProductionCompanyTypes[];
  production_countries:  MovieDetailsProductionCountryTypes[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      MovieDetailsSpokenLanguageTypes[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
};

export interface MovieDetailsBelongsToCollectionTypes {
  id:            number;
  name:          string;
  poster_path:   string;
  backdrop_path: string;
};

export interface Genre {
  id:   number;
  name: string;
};

export interface MovieDetailsProductionCompanyTypes {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
};

export interface MovieDetailsProductionCountryTypes {
  iso_3166_1: string;
  name:       string;
};

export interface MovieDetailsSpokenLanguageTypes {
  english_name: string;
  iso_639_1:    string;
  name:         string;
};

export interface MovieCreditsTypes {
  id:   number;
  cast: MovieCreditsCastTypes[];
  crew: MovieCreditsCastTypes[];
};

export interface MovieCreditsCastTypes {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          string;
  job?:                 string;
};
