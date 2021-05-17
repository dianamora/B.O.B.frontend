import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function SearchModal(props) {

    const handleClose = () => props.setShow(false);

    return (
  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm?</Modal.Title>
          </Modal.Header>
          <Modal.Body>A bunch of list of breweries</Modal.Body>
          <Modal.Footer>
          <Modal.Title>PLease Confirm</Modal.Title>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default SearchModal