import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { defaultCities, getCities, getSelectedCity } from '../reducers';


const Cities = (props) => {
    console.log('props', props);
    const { defaultCities, cities, getDefaultCities, getCities, getSelectedCity } = props;
    return (
    <div>
        <Link to='/pages'>Pages</Link><br /><br />
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