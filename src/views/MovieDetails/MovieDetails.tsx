import { Col, Container, Row, Image, Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Link, useParams} from 'react-router-dom'
import { useEffect } from "react"
import { setMovie } from "../../redux/actions"
import { RootState } from "../../redux/interfaces"
import "./styles.css";


const MovieDetails = () => {
    const dispatch = useAppDispatch();
    let {imdbID = ""} = useParams<{ imdbID?: string }>() //gets the id from the URL  
    let selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie); //gets the selected movie from the state.
    useEffect(()=>{ //imdb is in the dependency array so whenever it changes it sets the movie based on the id in the parameter
        dispatch(setMovie(imdbID))
    },[imdbID])
    return(
        <Container fluid className="movie-details">
            <Row className="text-left text-white"><Link to="/"><Button className="backButton">Back To Search</Button></Link></Row>
            <Row className="align-items-center justify-content-center movie-details-row">
                <Col sm={12} lg={4} className="mb-4 d-flex justify-content-center">
                    <Image fluid src={selectedMovie?.poster} />
                </Col>
                <Col sm={12}lg={8} className="details">
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