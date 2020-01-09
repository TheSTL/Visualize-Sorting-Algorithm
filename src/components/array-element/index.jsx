import React from 'react';
import PropTypes from 'prop-types';

export default class arrayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: this.props.value,
            newValue: this.props.newValue,
            count: this.props.count,
            newCount: this.props.newCount,
            index: this.props.index
        }
        this.divElement = React.createRef();
        this.count= window.COUNT;
    }
    componentDidMount() {
        if (this.state.newValue){
            setTimeout(this.changeElement, (this.state.newCount)*window.SPEED);
        }
        setTimeout(this.showElement, this.state.count* window.SPEED);

    }
    showElement = () => {
        this.divElement.current.style.opacity = '1';
       if (!this.state.newValue)
        this.changeBorder();
    }

    changeElement = () => {
        this.setState({
            value: this.state.newValue
        });
        this.changeBorder();
    }

    changeBorder = () => {
        this.divElement.current.style.border = '4px solid #343c3ac4';
        this.divElement.current.style.boxShadow = '0px 0px 5px 5px white';
        this.divElement.current.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.divElement.current.style.border= '4px solid rgba(34, 255, 2, 0.8)';
            this.divElement.current.style.boxShadow = 'none';
            this.divElement.current.style.transform = 'scale(1)';
        }, window.SPEED);
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
          <div 
            className= 'array-element' 
            ref={this.divElement} 
          > 
            {value} 
          </div>{this.state.count} {this.state.newCount}
          </React.Fragment>
        );
    }
}

arrayElement.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}