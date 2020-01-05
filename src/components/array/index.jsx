import React from 'react';  
import PropTypes from 'prop-types';

import ArrayElement from '../array-element';

export default function Array ({ values }) {    
    return(
      <div className= 'array'>
        {
            values.map((element) => (
                <ArrayElement value={element} />
            ))
        }
      </div>  
    );
}

Array.propTypes = {
    values: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.oneOfType(PropTypes.string)
    ])
}