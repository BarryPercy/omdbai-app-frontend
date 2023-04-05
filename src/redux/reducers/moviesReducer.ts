import { SearchMovie, SelectedMovie} from "../../redux/interfaces";
  
interface searchResults {
    type: 'SET_SEARCH_RESULTS';
    payload: SearchMovie[];
}
  
interface getMovie {
    type: 'GET_MOVIE';
    payload: string;
}
interface emptySearch {
    type: 'EMPTY_SEARCH';
    payload: SearchMovie[];
}
  
type Action = searchResults | getMovie | emptySearch

interface MovieState {
    movieList: SearchMovie[];
    selectedMovie: SelectedMovie | undefined;
  }

const initialState: MovieState = {
    movieList: [],
    selectedMovie:undefined,
}


const moviesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            
            return {
                ...state,
                movieList: action.payload, 
            }
        case 'GET_MOVIE':  
            console.log("GET MOVIE!",action.payload)
            return {
                ...state,
                selectedMovie:action.payload
            }
        case 'EMPTY_SEARCH':  
            return {
                ...state,
                movieList:action.payload
            }
        default:
            return state
    }
  }
  
  export default moviesReducer
  