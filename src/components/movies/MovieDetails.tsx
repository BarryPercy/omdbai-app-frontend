import { Col, Container, Row, Image } from "react-bootstrap"
import { useAppDispatch,useAppSelector } from "../../redux/hooks"
import { useParams} from 'react-router-dom'
import { useEffect } from "react"
import { getMovie } from "../../redux/actions"
import { RootState } from "../../redux/interfaces"


const MovieDetails = () => {
    const dispatch = useAppDispatch();
    const {imdbID = ""} = useParams<{ imdbID?: string }>()
    
    let selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie);
    console.log("selectedMovie->",selectedMovie)
    useEffect(()=>{
        dispatch(getMovie(imdbID))
    },[imdbID])
    return(
        <Container className="movie-details">
            <Row className="align-items-center justify-content-center movie-details-row">
                <Col lg={3}>
                    <Image src={selectedMovie?.poster}></Image>
                </Col>
                <Col lg={9} className="text-white">
                    <p><strong>Title:</strong> {selectedMovie?.title}</p>
                    <p><strong>Year:</strong> {selectedMovie?.year}</p>
                    <p><strong>Plot:</strong>  {selectedMovie?.plot}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails