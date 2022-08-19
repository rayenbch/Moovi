import * as types from "../types";
import Api from "../../api/Api";

export const toggleFavoriteFilm = (id) => (dispatch, getState) => {
  console.log("initial State", id);
  const { favoriteMovies } = getState().movies;

  let newFavoriteMoviesArr = [...favoriteMovies];
  const isLiked = favoriteMovies.includes(id);
  if (isLiked) {
    newFavoriteMoviesArr = newFavoriteMoviesArr.filter((item) => item !== id);
  } else {
    newFavoriteMoviesArr.push(id);
  }

  console.log("newFavoriteMoviesArr", newFavoriteMoviesArr);

  dispatch({
    type: types.GET_FAVORITE_MOVIES,
    payload: newFavoriteMoviesArr,
  });
};
