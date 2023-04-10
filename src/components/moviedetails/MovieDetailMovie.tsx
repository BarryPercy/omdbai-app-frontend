import { Col, Image } from "react-bootstrap";
import { SelectedMovie } from "../../redux/interfaces";

interface Props {
    movie: SelectedMovie;
}
const MovieDetailsMovie=({movie}: Props)=>{
    return(
        <>  
            <Col sm={12} lg={4} className="mb-4 d-flex justify-content-center">
                <Image fluid src={movie?.poster} />
            </Col>
                <Col xs={12}lg={8} className="details">
                <h1>{movie?.title} ({movie?.year})</h1>
                {movie?.genre?
                    <p>
                        <strong>Genre:</strong> {movie.genre}
                    </p>:null}
                {movie?.rated?
                    <p>
                        <strong>Rated:</strong> {movie.rated}
                    </p>:null}
                {movie?.rated?
                    <p>
                        <strong>Actors:</strong> {movie.actors}
                    </p>:null}
                {movie?.plot?
                    <p>
                        <strong>Plot:</strong> {movie.plot}
                    </p>:null}
            </Col>
        </>
    )
}

export default MovieDetailsMovie