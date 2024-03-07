import './ItemCard.css';
import Fotografija from '../assets/images/norm.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Macbukas() {
  return (
    <>
        <img src={Fotografija} alt="alternatyvas" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta necessitatibus neque possimus facere cupiditate asperiores quod quae earum aspernatur! Placeat tenetur eligendi nulla! Cupiditate velit aspernatur iste vel quasi.</p>
            <Container>
                <Row>
                <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>13.22 $/men</h2></Col>
                <Col><h3 style={{ fontSize: '1.2em' }}>5000.53eur</h3></Col>
                </Row>
            </Container>
    </>
  )
}

export default Macbukas
