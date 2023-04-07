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
        <Container fluid className="movie-details">
            <Row className="align-items-center justify-content-center movie-details-row">
                <Col sm={12} lg={6} className="mb-4 d-flex justify-content-center">
                    <Image fluid src={selectedMovie?.poster} />
                </Col>
                <Col lg={6} className="details">
                    <h1>{selectedMovie?.title}</h1>
                    <p>
                        <strong>Year:</strong> {selectedMovie?.year}
                    </p>
                    <p>
                        <strong>Plot:</strong> {selectedMovie?.plot}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails