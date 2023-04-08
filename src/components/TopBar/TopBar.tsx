import { Container, Navbar, Image, Row } from "react-bootstrap"
import "./styles.css";

const TopBar = () =>{
    return(
            <Container>
                <Row>
                    <Navbar.Brand href="/" className="text-white d-flex align-items-center justify-content-center">
                        <h1>OMDb Search</h1>
                        <Image src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png" className="top-nav-image"/>
                    </Navbar.Brand>
                </Row>
            </Container>
    )

}

export default TopBar
