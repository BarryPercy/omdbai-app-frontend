import { MovieState, searchResults, setMovie, setError} from "../../redux/interfaces";
  
type Action = searchResults | setMovie | setError //action type can only have the type of the actions set in our interface folder.

const initialState: MovieState = {
    movieList: [],
    selectedMovie:undefined,
    error:"",
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
  