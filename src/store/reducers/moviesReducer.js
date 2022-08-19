import * as types from "../types";

const INITIAL_STATE = {
  isLoadingMovies: false,
  movies: [],
  favoriteMovies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_RECOMMANDED_MOVIES_REQUEST:
      return {
        ...state,
        isLoadingMovies: true,
      };

    case types.GET_RECOMMANDED_MOVIES_SUCCESS:
      return {
        ...state,
        isLoadingMovies: false,
        movies: action.payload,
      };

    case types.GET_RECOMMANDED_MOVIES_FAILURE:
      return {
        ...state,
        isLoadingMovies: false,
      };

    case types.GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
      };

    default:
      return state;
  }
};
