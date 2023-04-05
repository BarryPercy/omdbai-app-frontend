import { AppThunk } from '../../types';

export const GET_MOVIE = "GET_MOVIE";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const EMPTY_SEARCH = "EMPTY_SEARCH";

export const getMovie = (imdbID: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/movies/'${imdbID}`);
    if (response.ok) {
      const results = await response.json();
      dispatch({
        type: GET_MOVIE,
        payload: results,
      });
    }
  } catch (error) {
    dispatch({ type: 'SEARCH_ERROR', payload: error });
  }
};

export const search = (title: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/search/${title}`);
    if (response.ok) {
      const results = await response.json();
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: results.Search,
      });
    }
  } catch (error) {
    dispatch({ type: 'SEARCH_ERROR', payload: error });
  }
};

export const emptySearch = (): AppThunk => async (dispatch) => {
    try {
        dispatch({
          type: EMPTY_SEARCH,
          payload: []
        });
    } catch (error) {
      dispatch({ type: 'SEARCH_ERROR', payload: error });
    }
  };
