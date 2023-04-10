export interface SearchMovie{ //interface for movie cards
    Poster:string,
    Title:string,
    Type: string,
    Year: string,
    imdbID: string,
}

export interface SelectedMovie{ //interface for movies selected (only plot added)
    poster:string,
    title:string,
    year: string,
    plot: string,
    imdbID: string,
    genre: string;
    actors: string;
    rated: string;
}

export interface RootState {
    movies: MovieState;
}

//for the reducer
export interface MovieState {
    movieList: SearchMovie[];
    selectedMovie: SelectedMovie | undefined;
    error: string;
    badId:boolean;
    movieLoading:boolean;
    searchLoading:boolean;
}

//ACTIONS
export interface searchResults {
    type: 'SET_SEARCH_RESULTS';
    payload: SearchMovie[];
}
  
export interface setMovie {
    type: 'SET_MOVIE';
    payload: string;
}

export interface setError {
    type: 'SET_ERROR';
    payload: string;
}

export interface badId {
    type: 'BAD_ID';
    payload: boolean;
}

export interface movieLoading {
    type: 'MOVIE_LOADING';
    payload: boolean;
}

export interface searchLoading {
    type: 'SEARCH_LOADING';
    payload: boolean;
}
// export interface emptySearch {
//     type: 'EMPTY_SEARCH';
//     payload: SearchMovie[];
// }


