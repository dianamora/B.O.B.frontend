import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState } from 'react';

import {BASE_URL} from '../App'



function SearchModal(props) {
    const handleConfirm = () => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(props.select)
    }

    fetch(BASE_URL+"/breweries", config)
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
      props.setShow(false);
    }

    const handleSelect = (e) => {
      props.setSelect(props.searchResults[e])
    }

    const handleClose = () => {
      props.setShow(false);
    }

    const ListItem = (brewery, index) => {
      return (
        <ListGroup.Item as="li" eventKey={index} key={index}>
          <div>{brewery.name}</div>
          <div>{brewery.location.address1}</div>
          <div>{brewery.location.city}, {brewery.location.state} {brewery.location.zip_code}</div>
        </ListGroup.Item>
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
                <ListGroup as="ul" defaultActiveKey="0" onSelect={(e) => handleSelect(e)}>
                  {mapResultsToList()}
              </ListGroup>
          </Modal.Body>
          <Modal.Footer>
          <Modal.Title></Modal.Title>
            <Button variant="secondary" onClick={handleConfirm}>
              Confirm!
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default SearchModal