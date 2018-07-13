import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultCities, getCities, getSelectedCity } from '../reducers';
import { Link } from 'react-router-dom';

class Cities extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('props', this.props);
        const { defaultCities, cities, getDefaultCities, getCities, getSelectedCity } = this.props;
        return (
        <div>
            <button onClick={getDefaultCities}>Get default cities</button>
            <button onClick={getCities}>Get cities</button>
            {defaultCities.length > 0 && <p>Default Cities</p> }
            <ul>
                {defaultCities.map((city, index) => <li key={index}>{city}</li>)}
            </ul>

            {cities.length > 0 && <p>Cities</p>}
            <ul>
                {cities.map((city, index) => <li onClick={() => getSelectedCity(city.id)} key={index}> <Link to={`/city_${city.name}`}>{city.name}</Link></li>)}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    const { defaultCities, cities, selectedCity } = state;
    return {
        defaultCities,
        cities,
        selectedCity
    }
}

const mapDispatchToProps = dispatch => ({
    getDefaultCities: () => dispatch(defaultCities),
    getCities: () => dispatch(getCities()),
    getSelectedCity: (city) => dispatch(getSelectedCity(city))
});


export default connect(mapStateToProps, mapDispatchToProps)(Cities);