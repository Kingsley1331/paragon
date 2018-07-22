import React from 'react';
import { Link } from 'react-router-dom';

const Pages = (props) => {
    console.log('Pages props', props);
    return <div>
            <h1>Pages</h1>
            <Link to='/'>home</Link> <br/>
            <Link to='/pageone'>page one</Link> <br/>
            <Link to='/pagetwo'>page two</Link> <br/>
            <Link to='/pagethree'>page three</Link>
           </div>;
}

export default Pages;