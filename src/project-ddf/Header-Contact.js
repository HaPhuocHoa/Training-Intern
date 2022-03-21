import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"
const HeaderContact = () => {
    return(
    <>
   
        <Container className="header-contact">
            <Row>
            <Col  className = "header-contact-email"><FontAwesomeIcon icon={faEnvelope} /> info@ionsite.vn</Col>
            <Col lg="auto" className="header-contact-phonenumber"><FontAwesomeIcon icon={faPhone} /> 0912.947.499</Col>
            <Col xs sm="1">
            </Col>
            </Row>
        </Container>
        <div className="header-underline"></div>
    </>
    )
}
export default HeaderContact