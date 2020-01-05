import React from 'react';
import PropTypes from 'prop-types';

export default function arrayElement({ value }) {
    return (<div className= 'array-element'> {value} </div>);
}

arrayElement.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}