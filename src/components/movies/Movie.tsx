import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SearchMovie } from "../../redux/interfaces";
import "./styles.css";

interface Props {
    movie: SearchMovie,
}

const Movie = ({movie}: Props)=>{ //receives the specific movie as a prop.
    const {Poster, imdbID, Title, Year} = movie; // destructuring the movie object
    return(
        <>
            {Poster!=="N/A"? //removes results that don't have a poster for aesthetic reasons. Clicking on a movie links you to that movies specific page with Link.
            <Col xs={6} sm={4} md={3} lg={2}> 
                <Link to={"/"+imdbID} className="no-decoration"> 
                    <Card className="movie-card mb-4">
                        <Card.Img variant="top" src={Poster} />
                        <Card.Body >
                            <p>{Title} ({Year})</p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>:""}
        </>
    )
}

export default Movie