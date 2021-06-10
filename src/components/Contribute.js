
import React, {useState} from 'react';
import ContributeForm from './Contributeform'
import SearchModal from './SearchModal'

function Contribute() {
const[show, setShow]= useState(false)
const [select, setSelect] = useState(null)
const[searchResults, setSearchResults]= useState([])

    return (
        <div>
            <p>This is where the submit form to send post data to the api</p>
            <ContributeForm setSelect={setSelect} setShow={setShow} setSearchResults={setSearchResults}></ContributeForm>
            <SearchModal select={select} setSelect={setSelect} searchResults={searchResults} show={show} setShow={setShow}></SearchModal>
        </div>
    )
}

export default Contribute;