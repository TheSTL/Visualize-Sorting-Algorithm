import React from 'react';  
import PropTypes from 'prop-types';

import ArrayElement from '../array-element';

export default class Array extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            values: this.props.values,
            count: this.props.count,
        }
        this.divArray = React.createRef();
    }

    componentDidMount() {
        console.log(this.divArray);
        if (this.divArray.current.style.opacity != '1') {
                    setTimeout(this.displayArray, this.state.count* 1000);
        }
    }

    displayArray = () => {
        this.divArray.current.style.opacity= 1;
    }
    
    render() {    
        const { values, count } = this.state;

        return(
        <div className= 'array' ref={this.divArray}>
            {
                values.map((element) => (
                    <ArrayElement value={element} />
                ))
            } {count}
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