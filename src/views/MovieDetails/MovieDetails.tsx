import { Col, Container, Row, Image, Button, Spinner, Alert } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { setMovie, SET_MOVIE } from "../../redux/actions"
import { RootState } from "../../redux/interfaces"
import "./styles.css";


const MovieDetails = () => {
    const dispatch = useAppDispatch();
    let {imdbID = ""} = useParams<{ imdbID?: string }>() //gets the id from the URL  
    const [isLoading, setIsLoading] = useState(true)
    let selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie);
    let badId = useAppSelector((state: RootState) => state.movies.badId); //gets the selected movie from the state.
    useEffect(()=>{ //imdb is in the dependency array so whenever it changes it sets the movie based on the id in the parameter
        setIsLoading(true);
        dispatch({
            type:SET_MOVIE,
            payload:undefined,
        })
        dispatch(setMovie(imdbID))
        setTimeout(()=>{
            setIsLoading(false);
        },500)
    },[imdbID])
    return(
        <Container fluid className="movie-details">
            <Row className="text-left text-white"><Link to="/"><Button className="backButton">Back To Search</Button></Link></Row>
            {isLoading ? (
                <Row className="align-items-center justify-content-center mt-5">
                    <Spinner animation="border" variant="primary" />
                </Row>
            ):(
                badId?
                <Row className="text-center text-white">
                    <h1>No such Id exists, check the id in your URL</h1>
                </Row>
                :
                (selectedMovie?<Row className="align-items-center justify-content-center movie-details-row">
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
                </Row>:
                    <Alert variant="danger" className="alert d-flex justify-content-center align-items-center">
                        Check your Network Connection
                    </Alert>
                )
            )}

        </Container>
    )
}

export default MovieDetails