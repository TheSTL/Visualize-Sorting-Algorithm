import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Icon } from "@chakra-ui/core";
import { Actions } from '../../action';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      maxRange: 1050,
      minRange: 0,
    }
  }  
  genrateArray = () => {
    const arrayLength = Math.floor( Math.random()*(7 - 5 + 1)) + 5;
    const maxElementValue = Math.floor( Math.random()*100);
    const newArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxElementValue));
    this.props.start(newArray);
  }

  speedChange = (e) => {
    const { maxRange } = this.state;
    window.SPEED = maxRange - e.target.value;  
    this.props.setSpeed(maxRange - e.target.value);  
  }

  speedChangeForReplay = (e) => {    
    this.props.setCurrentTimeStamp(Number(e.target.value));
  }

    render() {
      const { maxRange, minRange } = this.state;
      const { 
        startAgain, 
        stop, 
        endTimeStamp, 
        startTimeStamp, 
        currentTimeStamp 
      } = this.props;
      return (
        <header className= 'main-header'> 
          <div className='control-btns'>
            <ButtonGroup spacing={4}>
              <Button variantColor="green" size="md" onClick={this.genrateArray} >
                Start
              </Button>
              <Button className="replay" variantColor="yellow" size="md" onClick={startAgain} >
                Replay
              </Button><Button variantColor="red" size="md" onClick={stop} >
                Stop
              </Button>
            </ButtonGroup>
            <div style={{float: 'right'}}>
              <div className="control-speed" > 
                <label>Control History</label>
                <input type="range" step='1' min={startTimeStamp} value={currentTimeStamp} max={endTimeStamp} onChange={this.speedChangeForReplay} />
              </div>
            </div>
          </div>
          <div className='control-speed'>
            <label>Speed</label>
            <div className="input-range-wrapper"> 
              <Icon name="minus" />              
              <input type="range" step='20' min={minRange} value={Window.SPEED} max={maxRange} onChange={this.speedChange} />
              <Icon name="add" />            
            </div>
          </div>
        </header>
      );
    }
}

Header.propTypes = {
    algorithms: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => {
  return {
    speed: state.speed,
    currentTimeStamp: state.currentTimeStamp,
    startTimeStamp: state.startTimeStamp,
    endTimeStamp: state.endTimeStamp,
  }
}

const mapDispatchToProps = dispatch => {
  return {
   start: (array) => dispatch(Actions.start(array)),
   setSpeed: (speed) => dispatch(Actions.setSpeed(speed)),
   setCurrentTimeStamp: (speed) => dispatch(Actions.setCurrentTimeStamp(speed)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);