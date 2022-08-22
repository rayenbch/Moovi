import * as types from "../types";
import Api from "../../api/Api";

export const toggleFavoriteFilm = (movie) => (dispatch, getState) => {
  console.log("initial State", movie);
  const { favoriteMovies } = getState().movies;

  let newFavoriteMoviesArr = [...favoriteMovies];
  const isLiked =
    favoriteMovies.findIndex((item) => item.id === movie.id) !== -1;
  if (isLiked) {
    newFavoriteMoviesArr = newFavoriteMoviesArr.filter(
      (item) => item.id !== movie.id
    );
  } else {
    newFavoriteMoviesArr.push(movie);
  }

  console.log("newFavoriteMoviesArr", newFavoriteMoviesArr);

  dispatch({
    type: types.GET_FAVORITE_MOVIES,
    payload: newFavoriteMoviesArr,
  });
};
