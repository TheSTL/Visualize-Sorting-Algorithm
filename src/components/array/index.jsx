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

    componentDidMount() {
        const { count, newCount, newValues } = this.state;
        if (this.divArray && this.divArray.current && this.divArray.current.style.opacity != '1') {
                    setTimeout(this.displayArray, count* 200);
        }
    }

    displayArray = () => {
        this.divArray.current.style.opacity= 1;
    }
    
    render() {    
        const { values, count, newCount, newValues } = this.state;
        console.log(newValues);
        
        return(
        <div className= 'array' ref={this.divArray} >
            {
               values.map((element, i) =>     (      
                <ArrayElement 
                  newCount={newCount}
                  value={element} 
                  newValue={newValues? newValues[i] : null} />
                ))
            }{count} {newCount}
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