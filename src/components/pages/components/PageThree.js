import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const PageThree = (props) => {
    console.log('PageThree props', props);
    const { history } = props;
    return <div>
        <h1>Page Three</h1>
        <h3>Links</h3>
        <Link to='/'>home</Link> <br />
        <Link to='/pageone'>page one</Link> <br />
        <Link to='/pagetwo'>page two</Link> <br />
        <Link to='/pagethree'>page three</Link>

        <h3>Navigation</h3>
        <button onClick={() => history.push('/pageone')}>Go to page one (push)</button><br /><br />
        <button onClick={() => history.replace('/pagetwo')}>Go to page two (replace) </button><br /><br />
        <button onClick={() => history.goBack()}>Go back </button><br /><br />
        <button onClick={() => history.goForward()}>Go forward </button>
    </div>;
}

export default withRouter(PageThree);