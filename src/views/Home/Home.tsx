import React from "react";
import { Container,Button } from "react-bootstrap";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import Movies from "../../components/movies/Movies";
import { useEffect } from "react"
import { emptySearch } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";
import MovieDetails from "../../components/movies/MovieDetails";

const Home = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(emptySearch())
    },[]);
    return (
        <Container fluid="sm">
            <h1 className="blog-main-title">OMDb</h1>
            <SearchBar/>
            <Movies/>
        </Container>
    );
};

export default Home;
