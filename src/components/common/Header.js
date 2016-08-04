import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
const Header = ({loading}) => {
    return(
       <nav>
            <IndexLink to="/" className="nav_link" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" className="nav_link" activeClassName="active">About</Link>
            {" | "}
            <Link to="/courses" className="nav_link" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/tree" className="nav_link" activeClassName="active">KnowledgeTree</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
       </nav>  
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;