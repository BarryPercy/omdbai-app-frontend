import { Container, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound=()=>{
    return(
        <Container>
            <Row className="text-center text-white"><Link to="/"><Button className="backButton">Back To Search</Button></Link></Row>
            <Row className="text-center text-white">
                <h1>404 Page not found!</h1>
            </Row>
        
        </Container>
    )
}

export default NotFound