import { Container } from "react-bootstrap";
import SearchBar from "../../components/search/SearchBar";
import Movies from "../../components/movies/Movies";

const Home = () => {
    return (
        <Container>
            <SearchBar/>
            <Movies/>
        </Container>
    );
};

export default Home;
