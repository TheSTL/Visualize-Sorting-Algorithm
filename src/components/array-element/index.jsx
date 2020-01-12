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
            end: this.props.end
        }
        this.divElement = React.createRef();
    }
    componentDidMount() {
        if (this.state.newValue){
            setTimeout(this.changeElement, (this.state.newCount)*window.SPEED);
        }
        setTimeout(this.showElement, this.state.count* window.SPEED);

    }
    showElement = () => {
       if (this.divElement.current)
        this.divElement.current.style.opacity = '1';
       if (this.state.end)
        this.changeBorder();
    }

    changeElement = () => {
        this.setState({
            value: this.state.newValue
        });
        this.changeBorder();
    }

    changeBorder = () => {
        if (this.divElement.current){
            this.divElement.current.style.border = '2px solid #343c3ac4';
            this.divElement.current.style.boxShadow = '0px 0px 5px 5px white';
            this.divElement.current.style.transform = 'scale(1.3)';
            setTimeout(() => {
                if (this.divElement.current){
                    this.divElement.current.style.border= '2px solid rgba(34, 255, 2, 0.8)';
                    this.divElement.current.style.boxShadow = 'none';
                    this.divElement.current.style.transform = 'scale(1)';
                }
            }, window.SPEED);
        }
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
          </div>
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