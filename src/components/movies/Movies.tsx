import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks"
import Movie from "./Movie"
import { SearchMovie, RootState } from "../../redux/interfaces";


const Movies = ()=>{
    let movieList: Array<SearchMovie> = useAppSelector((state: RootState) => state.movies.movieList);
    return(
        <Row className = "mt-5">
           {movieList && movieList.length>0 ? movieList.map((movie)=>{
                return(
                    <Movie key={String(movie.imdbID)} movie={movie} />   
                )
            }):""}
        </Row>
    )
}

export default Movies