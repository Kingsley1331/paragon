import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const City = (props) => {
    console.log('city props', props);
    const {name, main:{humidity, temp}={}, weather:[{description}={}] = [] } = props.selectedCity;
    return <div>
        <Link to='/'><h4>Home</h4></Link>
        <h1>City: {name}</h1>
        <h3>Temperature: {temp}K</h3>
        <h3>humidity: {humidity}</h3>
        <h3>description: {description}</h3>
    </div>
}

const mapStateToProps = state => ({
    selectedCity: state.selectedCity
});

export default connect(mapStateToProps)(City);
