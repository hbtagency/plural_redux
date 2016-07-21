import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return(
       <nav>
            <IndexLink to="/" className="nav_link" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" className="nav_link" activeClassName="active">About</Link>
            {" | "}
            <Link to="/courses" className="nav_link" activeClassName="active">Courses</Link>
       </nav>  
    );
};

export default Header;