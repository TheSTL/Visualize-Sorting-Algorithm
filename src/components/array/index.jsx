import React from 'react';  
import PropTypes from 'prop-types';

import ArrayElement from '../array-element';

export default class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            values: this.props.values,
            newValues: this.props.newValues,
            count: this.props.count,
            newCount: this.props.newCount,
        }
        this.divArray = React.createRef();
    }
    
    render() {    
        const { values, count, newCount, newValues } = this.state;
        
        return(
        <div className= 'array' ref={this.divArray} >
            {
               values.map((element, i) =>     (      
                <ArrayElement 
                  count={count - values.length + i }
                  newCount={newCount - (values.length - i) }
                  value={element} 
                  newValue={newValues? newValues[i] : null} 
                  index={i}
                  />
                ))
            }
        </div>  
        );
    };
}

Array.propTypes = {
    values: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.oneOfType(PropTypes.string)
    ])
}