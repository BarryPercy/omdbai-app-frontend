import { AppThunk } from '../../types'; //needed correct typing for running actions with dispatch

export const SET_MOVIE = "SET_MOVIE";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const EMPTY_SEARCH = "EMPTY_SEARCH";
export const SET_ERROR = "SET_ERROR";
export const BAD_ID = "BAD_ID";
export const MOVIE_LOADING = "MOVIE_LOADING"
export const SEARCH_LOADING = "SEARCH_LOADING"

export const setMovie = (imdbID: string): AppThunk => async (dispatch) => { //takes a string from the url of movie details and sends a fetch for the movie with that id
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/movies/${imdbID}`);
    if (response.ok) {
      const results = await response.json();
      console.log(results)
      if(results.Response==="True"){
        dispatch({
          type: SET_MOVIE,
          payload: results,
        });
        dispatch({
          type: BAD_ID,
          payload:false,
        })
        dispatch({
          type:MOVIE_LOADING,
          payload:false,
      })
      }else{
        dispatch({
          type: BAD_ID,
          payload:true,
        })
      }    
    }
  } catch (error) {
    console.log("hey")
  }
};

export const search = (title: string): AppThunk => async (dispatch) => { //takes a term and tries to search, if the response is 429 it means they've sent too many requests, 
  try {                                                                  //if it gets a response of false then there's no results, otherwise it sends the results to the reducer
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/search/${title}`);
    if(response.status === 429){
      dispatch({
        type: SET_ERROR,
        payload:"Too many requests, please slow down.",
      })
      dispatch({
        type: SEARCH_LOADING,
        payload:false,
      })
    }
    if (response.ok) {
      const results = await response.json();
      console.log(results.Response)
      if(results.Response==="False"){
        dispatch({
          type: SET_ERROR,
          payload:"No Results.",
        })
        dispatch({
          type: SEARCH_LOADING,
          payload:false,
        })
      }else{
        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: results.Search,
        });
        dispatch({
          type: SET_ERROR,
          payload:"",
        })
        dispatch({
          type: SEARCH_LOADING,
          payload:false,
        })
      } 
    }
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: "Unable to perform search.",
    });
  }
};
// Tested around with emptying the results on refresh but settled with keeping results being better.
// export const emptySearch = (): AppThunk => async (dispatch) => {
//     try {
//         dispatch({
//           type: EMPTY_SEARCH,
//           payload: []
//         });
//     } catch (error) {
//       dispatch({ type: 'SEARCH_ERROR', payload: error });
//     }
// };
