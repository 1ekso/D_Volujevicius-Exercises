import './ItemCard.css';
import Foto from '../assets/images/images1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Lenmacbukas() {
  return (
    <>
      <img src={Foto} alt="alternatyvas" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat error autem iure iusto, hic veritatis, minima minus similique illum aspernatur! Fugiat repellat mollitia porro nisi excepturi reiciendis dignissimos praesentium?</p>
      <Container>
        <Row>
          <Col><h2 className="text-success" style={{ fontSize: '0.9em' }}>13.22 $/men</h2></Col>
          <Col><h3 style={{ fontSize: '1.2em' }}>5000.53eur</h3></Col>
        </Row>
      </Container>
    </>
  );
}

export default Lenmacbukas;
