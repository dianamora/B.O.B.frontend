import React, { Component } from 'react';
import axios from 'axios';
import BreweryCard from './BreweryCard'

import { BASE_URL } from '../App'


export default class Main extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        axios.get(BASE_URL + "/breweries")
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
                {this.mapBreweriesToCards()}
            </div>
        )
    };
}