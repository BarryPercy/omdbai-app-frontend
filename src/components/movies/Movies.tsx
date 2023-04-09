import { Row, Spinner, Col } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks"
import Movie from "./Movie"
import { SearchMovie, RootState } from "../../redux/interfaces";


const Movies = ()=>{
    let movieList: Array<SearchMovie> = useAppSelector((state: RootState) => state.movies.movieList); // gets the list of searched movies from the state
    let isLoading = useAppSelector((state: RootState) => state.movies.searchLoading);
    return(
        <>
            {isLoading?
                <Row className="align-items-center justify-content-center mt-5">
                    <Spinner animation="grow" variant="secondary" />
                </Row>
                :null

            } 
            <Row className = "mt-5">
                {movieList && movieList.length>0 ? movieList.map((movie)=>{ //if the movieList is populated then it maps all the movies.
                        return(
                            <Movie key={String(movie.imdbID)} movie={movie} />   
                        )
                }):""}
            </Row>
        </>
    )
}

export default Movies