import './ItemCard.css';
import Fotke from '../assets/images/images.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Lenovo() {
  return (
    <>
        <img src={Fotke} alt="alternatyvas" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates animi odit ex non velit minus voluptas aperiam, necessitatibus nesciunt, molestias temporibus ut sint, repellendus culpa. Doloribus nobis iure ea!</p>
          <Container>
            <Row>
              <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>13.22 $/men</h2></Col>
              <Col><h3 style={{ fontSize: '1.2em' }}>5000.53eur</h3></Col>
            </Row>
          </Container>
    </>
  )
}

export default Lenovo
