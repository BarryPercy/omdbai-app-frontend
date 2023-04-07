import { Container,Button } from "react-bootstrap";
import "./styles.css";
import SearchBar from "../../components/search/SearchBar";
import Movies from "../../components/movies/Movies";
import { useEffect } from "react"
import { emptySearch } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

const Home = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(emptySearch())
    },[]);
    return (
        <Container fluid="sm">
            <SearchBar/>
            <Movies/>
        </Container>
    );
};

export default Home;
