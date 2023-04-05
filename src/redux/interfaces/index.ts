export interface SearchMovie{
    Poster:string,
    Title:string,
    Type: string,
    Year: string,
    imdbID: string,
}

export interface SelectedMovie{
    poster:string,
    title:string,
    year: string,
    plot: string,
    imdbID: string,
}

export interface MovieState {
    movieList: SearchMovie[];
    selectedMovie: SelectedMovie | undefined;
}

export interface RootState {
    movies: MovieState;
}