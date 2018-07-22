import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const PageOne = (props) => {
    console.log('PageOne props', props);
    const { history } = props;
    return <div>
        <h1>Page One</h1>
        <h3>Links</h3>
        <Link to='/'>home</Link> <br />
        <Link to='/pageone'>page one</Link> <br />
        <Link to='/pagetwo'>page two</Link> <br />
        <Link to='/pagethree'>page three</Link>

        <h3>Navigation</h3>
        <button onClick={() => history.push('/pagetwo')}>Go to page two (push)</button><br /><br />
        <button onClick={() => history.replace('/pagethree')}>Go to page three (replace) </button><br /><br />
        <button onClick={() => history.goBack()}>Go back </button><br /><br />
        <button onClick={() => history.goForward()}>Go forward </button>
        </div>;
}

export default withRouter(PageOne);