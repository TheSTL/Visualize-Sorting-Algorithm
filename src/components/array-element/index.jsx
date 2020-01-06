import React from 'react';
import PropTypes from 'prop-types';

export default class arrayElement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            value: this.props.value
        }
    }

    render() {
        const { value } = this.state;
        return (<div className= 'array-element'> {value} </div>);
    }
}

arrayElement.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}