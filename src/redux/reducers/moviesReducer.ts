interface SearchMovie{
    Poster:string,
    Title:string,
    Type: string,
    Year: string,
    imdbID: string,
}
  
interface SearchResults {
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
  
type Action = SearchResults | getMovie | emptySearch

const initialState = {
    movieList: [],
    clickedMovie:"",
}


const moviesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            console.log(action.payload)
            return {
                ...state,
                movieList: action.payload, 
            }
        case 'GET_MOVIE':  
            return {
                ...state,
                clickedMovie:action.payload
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
  