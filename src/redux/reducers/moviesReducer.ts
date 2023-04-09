import { MovieState, searchResults, setMovie, setError, badId, movieLoading } from "../../redux/interfaces";
  
type Action = searchResults | setMovie | setError | badId | movieLoading //action type can only have the type of the actions set in our interface folder.

const initialState: MovieState = {
    movieList: [],
    selectedMovie:undefined,
    error:"",
    badId:false,
    movieLoading: false,
}


const moviesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                movieList: action.payload, 
            }
        case 'SET_MOVIE':  
            return {
                ...state,
                selectedMovie:action.payload
            }
        case 'SET_ERROR':  
            return {
                ...state,
                error:action.payload
            }
        case 'BAD_ID':
            return {
                ...state,
                badId:action.payload
            }
        case 'MOVIE_LOADING':
            return{
                ...state,
                movieLoading:action.payload
            }
        // case 'EMPTY_SEARCH':  //no longer using
        //     return {
        //         ...state,
        //         movieList:action.payload
        //     }
        default:
            return state
    }
  }
  
  export default moviesReducer
  