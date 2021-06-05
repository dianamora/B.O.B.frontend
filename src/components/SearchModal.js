import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState } from 'react';



function SearchModal(props) {

    const handleClose = () => props.setShow(false);

    const ListItem = (brewery, index) => {
      return (
        <ListGroup.Item as="li" eventKey={index}>{brewery.name}</ListGroup.Item>
      ) 
    }

    const mapResultsToList = () => {
      return props.searchResults.map((brewery, index) => {
              return ListItem(brewery, index)
          })    
    }

    return (
  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Confirm The Brewery You Want To Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <ListGroup as="ul" defaultActiveKey="0">
                  {mapResultsToList()}
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