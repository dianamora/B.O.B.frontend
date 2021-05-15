import React, { Component } from 'react';
import axios from 'axios';
import BreweryCard from './BreweryCard'

import { BASE_URL } from '../App'


// function Main() {

//     const [brewery, setBrewery] = useState("");
//     const getBreweries = () => {
//         Axios.get("https://blackownedbreweries.herokuapp.com/breweries",).then(
//             (response) => {
//                 console.log(response);
//                 setBrewery(response.data);
//             }
//         );
//     };

//     return (
//         <div>
//             List of Breweries <button onClick={getBreweries}>Get Brewery</button>
//             {brewery}
//         </div>
//     );
// }

// export default Main;

export default class Main extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        axios.get(BASE_URL+"/breweries")
            .then(res => {
                const breweries = res.data
                this.setState({ breweries })
            })
    }

    mapBreweriesToCards = () => {
        return this.state.breweries.map((brewery, index) => {
                return <BreweryCard brewery={brewery} key={index}></BreweryCard>
            })    
    }

    render() {
        return (
            <div>
                {/* {this.state.breweries.map(brewery => <li>Name:{brewery.name}</li>)}
                {this.state.breweries.map(brewery => <li>Location:{brewery.location}</li>)}
                {this.state.breweries.map(brewery => <li>Hours:{brewery.hours}</li>)}
                {this.state.breweries.map(brewery => <li>Contact:{brewery.contact}</li>)}
                {this.state.breweries.map(brewery => <li>Website:{brewery.website}</li>)} */}
                {/* {this.state.breweries.map(brewery => <li>Img_url:{brewery.img_url}</li>)} */}
                {this.mapBreweriesToCards()}
            </div>
        )
    };
}