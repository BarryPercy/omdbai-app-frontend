import { Container, Navbar } from "react-bootstrap"

const TopBar = () =>{
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-white"><h1>OMDb Search</h1></Navbar.Brand>
            </Container>
        </Navbar>
    )

}

export default TopBar
