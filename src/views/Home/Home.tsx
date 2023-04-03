import React from "react";
import { Container,Button } from "react-bootstrap";
import "./styles.css";
import SearchBar from "../../components/SearchBar";

const Home = () => {
    const getAPI = async ()=>{
        try {
            const imdbId = "tt3896198"
            const response = await fetch(process.env.REACT_APP_BACKEND+"/movies/"+imdbId)
            if(response.ok){
                const movie = await response.json()
                console.log(movie)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container fluid="sm">
            <h1 className="blog-main-title">OMDb</h1>
            <Button variant="primary" onClick={getAPI}>Get Movie</Button>
            <SearchBar/>
        </Container>
    );
};

export default Home;
