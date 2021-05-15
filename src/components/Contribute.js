import React, {useState, useEffect} from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';




function Contribute (props) {
const [inputs, setInputs] = useState({name: "", city: "", state: ""})

const updateInputs = (target) => {
    setInputs(prevState => ({
        ...prevState,
        [target.name]: target.value}))   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
  }

 return (

        <Form className="Searchbox p-3" onSubmit={handleSubmit()} >
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
                            <Form.Label>State</Form.Label>
                            <Form.Control 
                                as="select"
                                onChange={ (e) => updateInputs(e.target) }
                                name="state"
                                type="text">
                                <option value="">N/A</option>
                                <option value="AK">Alaska</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="AZ">Arizona</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DC">District of Columbia</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </Form.Control>
                            <Button color="primary" type="submit" className="btn-primary">
                                Submit
                            </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
 )
}

export default Contribute