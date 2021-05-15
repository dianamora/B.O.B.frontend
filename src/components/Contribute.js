// import React from 'react';

// function Contribute() {
//     return (
//         <div>
//             <p>This is where the submit form to send post data to the api</p>
//         </div>
//     )
// }

// export default Contribute;

import React, {useState, useEffect} from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Contribute (props) {
const [inputs, setInputs] = useState({name: "", city: "", state: ""})

const updateInputs = (target) => {
    setInputs(prevState => ({
        ...prevState,
        [target.name]: target.value}))   
  }
 return (

        <Form className="Searchbox p-3">
            <Row>
                <Col xs={6} md={8}>
                    <Form.Group controlId="formGroupSearch"> 
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            value={ inputs.name }
                            name="name"
                            type="text" 
                            onChange={ (e) => updateInputs(e.target) }
                            placeholder='Brewery Name'
                            className='search-input' />
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                value={ inputs.city}
                                name="city"
                                type="text" 
                                onChange={ (e) => updateInputs(e.target) }
                                placeholder='City'
                                className='search-input' />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
 )
}

export default Contribute