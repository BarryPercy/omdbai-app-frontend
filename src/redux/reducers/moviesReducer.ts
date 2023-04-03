enum ActionTypes {
    A = 'SET_SEARCH_RESULTS',
    B = 'GET_MOVIE',
  }
  
interface IActionA {
    type: ActionTypes.A;
    payload: string;
}
  
interface IActionB {
    type: ActionTypes.B;
    payload: string;
}
  
type IAction = IActionA | IActionB

const initialState = {
    movieList: [],
    clickedMovie:"",
}


const moviesReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                songsSearched:true,
                songList: action.payload, 
            }
        case 'GET_MOVIE':  
            return {
                ...state,
                clickedMovie:action.payload
            }
        default:
            return state
    }
  }
  
  export default moviesReducer
  