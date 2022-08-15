import * as types from "../types";
import Api from "../../api/Api";

export const getRecommendedMovies = () => async (dispatch) => {
  const url = "/movie/popular";
  try {
    dispatch({ type: types.GET_RECOMMANDED_MOVIES_REQUEST });
    const res = await Api.get(url);
    console.log("Res getRecommendedMovies", res.data);
    dispatch({
      type: types.GET_RECOMMANDED_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (e) {
    console.error("Error handling getRecommendedMovies action", e);
    dispatch({ type: types.GET_RECOMMANDED_MOVIES_FAILURE });
  }
};
