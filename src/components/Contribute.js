
import React, {useState} from 'react';
import ContributeForm from './Contributeform'
import SearchModal from './SearchModal'

function Contribute() {
const[show, setShow]= useState(false)
const[searchResults, setSearchResults]= useState([])

    return (
        <div>
            <p>This is where the submit form to send post data to the api</p>
            <ContributeForm setShow={setShow} setSearchResults={setSearchResults}></ContributeForm>
            <SearchModal searchResults={searchResults} show={show} setShow={setShow}></SearchModal>
        </div>
    )
}

export default Contribute;