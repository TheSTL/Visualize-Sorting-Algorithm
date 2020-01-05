import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ algorithms }) {
    return (
      <header className= 'main-header'> 
        <nav>
         {
            algorithms.map((algo) => (
            <Link to={ `/${algo}` }> {algo} </Link>
            ))
         }
        </nav>
      </header>
    );
}

Header.propTypes = {
    algorithms: PropTypes.arrayOf(PropTypes.string)
}