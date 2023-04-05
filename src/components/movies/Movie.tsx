import { Card, Col } from "react-bootstrap"
import "./styles.css";
import { useAppDispatch } from '../../redux/hooks';
import { getMovie } from "../../redux/actions";
import { Link } from "react-router-dom"
import { SearchMovie } from "../../redux/interfaces";

interface Props {
    movie: SearchMovie
}

const Movie = ({movie}:Props)=>{
    const handleClick = () =>{
        dispatch(getMovie(imdbID))
    }
    const dispatch = useAppDispatch();
    const {Poster, imdbID, Title, Year} = movie;
    return(
        <>
            {Poster!=="N/A"?
            <Col  xs={6} sm={4} md={3} lg={2} >
                <Link to={"/"+imdbID}>
                    <Card className = "movie-card mb-4" onClick={handleClick}>
                    <Card.Img variant="top" src={Poster} />
                    <Card.Body>
                        <p>{Title}</p>
                    </Card.Body>
                </Card>
            </Link>
            </Col>:""}
        </>
    )
}

export default Movie