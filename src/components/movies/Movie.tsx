import { Card} from "react-bootstrap"
import "./styles.css";

interface SearchMovie{
    Poster:string,
    Title:string,
    Type: string,
    Year: string,
    imdbID: string,
}
interface Props {
    movie: SearchMovie
}

const Movie = ({movie}:Props)=>{
    const {Poster} = movie;
    return(
        <Card className = "movie-card mb-4">
            <Card.Img variant="top" src={Poster} />
        </Card>
    )
}

export default Movie