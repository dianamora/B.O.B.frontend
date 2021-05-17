
import React, {useState} from 'react';
import ContributeForm from './Contributeform'
import SearchModal from './SearchModal'

function Contribute() {
const[show, setShow]= useState(false)

    return (
        <div>
            <p>This is where the submit form to send post data to the api</p>
            <ContributeForm setShow={setShow}></ContributeForm>
            <SearchModal show={show} setShow={setShow}></SearchModal>
        </div>
    )
}

export default Contribute;