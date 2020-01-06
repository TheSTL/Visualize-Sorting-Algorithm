import React from 'react';
import PropTypes from 'prop-types';

export default class arrayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: this.props.value,
            newValue: this.props.newValue,
            newCount: this.props.newCount,
        }
        this.divElement = React.createRef();
    }
    componentDidMount() {
        if (this.state.newValue){
            setTimeout(this.changeElement, this.state.newCount*200);
        }
    }
    changeElement = () => {
        this.setState({
            value: this.state.newValue
        })
    }

    render() {
        const { value } = this.state;
        return (
          <div 
            className= 'array-element' 
            ref={this.divElement} 
          > 
            {value} 
          </div>
        );
    }
}

arrayElement.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}