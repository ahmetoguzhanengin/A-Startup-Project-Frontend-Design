import { Container, Col, Row } from "react-bootstrap";
import {FaMapMarkerAlt} from   "react-icons/fa";
import {AiOutlineMail} from   "react-icons/ai";
import {BsTelephoneInbound} from   "react-icons/bs";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Footer = () =>{

    return(
        <footer className="footer">
            <Container>
                <Row className ="align-item-center">
            
                    <Col>
                    
                    <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>{"İletişim"}</h1>
                        </div>}
                        </TrackVisibility>
                    
                     <h5>Proje hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz.</h5>
                    <h6> <AiOutlineMail/>{" yeninesilcalisma@gmail.com - "}<BsTelephoneInbound/> { " (0123) 456 78 90" } </h6>
                    <small>CopyRight 2023. All Right Reserved</small>
                    
                    </Col>

                </Row>
            
            </Container>

        </footer>
    )
}