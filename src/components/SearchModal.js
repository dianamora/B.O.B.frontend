import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'


function SearchModal(props) {

    const handleClose = () => props.setShow(false);

    return (
  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Confirm The Brewery You Want To Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
          </Modal.Body>
          <Modal.Footer>
          <Modal.Title></Modal.Title>
            <Button variant="secondary" onClick={handleClose}>
              Confirm!
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default SearchModal