import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function MeuBotaoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col sm={8}>Buscar</Col>
        <Col sm={4}>
        <Button
            variant="primary"
            onClick={handleShow}
            style={{ float: 'right', marginTop: '10px' }}
              >
                   +
        </Button>

        </Col>
      </Row>

      <Row>
        <Col>Tabela</Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Opa, vc esta lendo um texto do modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MeuBotaoModal;
