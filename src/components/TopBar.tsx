import { Container, Navbar } from "react-bootstrap"

const TopBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">OMDb Search</Navbar.Brand>
            </Container>
        </Navbar>
    )

}

export default TopBar
