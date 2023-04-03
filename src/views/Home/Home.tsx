import React from "react";
import { Container,Button } from "react-bootstrap";
import "./styles.css";
import SearchBar from "../../components/SearchBar";

const Home = () => {
    
    return (
        <Container fluid="sm">
            <h1 className="blog-main-title">OMDb</h1>
            <SearchBar/>
        </Container>
    );
};

export default Home;
