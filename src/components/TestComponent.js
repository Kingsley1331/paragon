import React, { Component } from 'react';
import { withRouter } from 'react-router';

const TestComponent = (props) => {
    console.log('TestComponent props', props);
    return <button onClick={() => props.history.replace('/city_Ragusa')}>TestComponent</button>
}

export default withRouter(TestComponent);