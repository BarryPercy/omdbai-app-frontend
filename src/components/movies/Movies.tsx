import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks"
import Movie from "./Movie"

interface SearchMovie{
    Poster:string,
    Title:string,
    Type: string,
    Year: string,
    imdbID: string,
}
interface RootState {
    movies: {
      movieList: SearchMovie[];
    };
  }
const Movies = ()=>{
    let movieList: Array<SearchMovie> = useAppSelector((state: RootState) => state.movies.movieList);
    return(
        <Row className = "mt-5">
           {movieList && movieList.length>0 ? movieList.map((movie)=>{
                console.log("this movie->",movie)
                return(
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Movie key={String(movie.imdbID)} movie={movie} />
                    </Col>
                    )
                }):""}
        </Row>
    )
}

export default Movies