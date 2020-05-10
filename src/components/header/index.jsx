import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, 
  ButtonGroup, 
  Icon, 
  Drawer,
  DrawerBody,
  Image,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";
import { Actions } from '../../action';
import Footer from '../footer';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      maxRange: 1050,
      minRange: 0,
      openDrawer: false,
    }
  }  
  genrateArray = () => {
    const arrayLength = Math.floor( Math.random()*(20 - 5 + 1)) + 5;
    const maxElementValue = Math.floor( Math.random()*100);
    const newArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxElementValue));
    this.props.start(newArray);
  }

  speedChange = (e) => {
    this.props.setSpeed(e.target.value);  
  }

  speedChangeForReplay = (e) => {    
    this.props.setCurrentTimeStamp(Number(e.target.value));
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      openDrawer: !prevState.openDrawer
    }));
  }

    render() {
      const { maxRange, minRange, openDrawer } = this.state;
      const { 
        speed,
        replay,
        stop, 
        endTimeStamp, 
        startTimeStamp, 
        currentTimeStamp 
      } = this.props;
      return (
        <header className= 'main-header'> 
          <Icon 
            name="settings" 
            size="32px" 
            style={{ cursor: 'pointer' }}
            onClick={this.toggleDrawer}
          />
          <div style={{float: 'right'}}>
            <a href="https://github.com/TheSTL/Visualize-Sorting-Algorithm">
              <Image size="32px" src='/github-icon.png' />
            </a>
          </div>
          <Drawer
            isOpen={openDrawer}
            placement="left"
            onClose={this.toggleDrawer}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton style={{ backgroundColor: 'black' }} />
              <DrawerHeader style={{ color: 'black', marginTop: '42px', textDecoration: 'underline'  }}>Visualize Sorting Algorithm</DrawerHeader>
              <DrawerBody>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link className="drawer-link" to='/'>Home</Link>
                  <Link className="drawer-link" to='merge-sort'>Merge Sort</Link>
                </div>
              </DrawerBody>
                <Footer />
            </DrawerContent>
          </Drawer>
          <div className='control-btns'>
            <ButtonGroup spacing={4}>
              <Button variantColor="green" size="md" onClick={this.genrateArray} >
                Start
              </Button>
              <Button className="replay" variantColor="yellow" size="md" onClick={replay} >
                Replay
              </Button><Button variantColor="red" size="md" onClick={stop} >
                Stop
              </Button>
            </ButtonGroup>
            <div style={{float: 'right'}}>
              <div className="control-speed" > 
                <label>Control Visualization</label>
                <input type="range" step='1' min={startTimeStamp} value={currentTimeStamp} max={endTimeStamp} onChange={this.speedChangeForReplay} />
              </div>
            </div>
          </div>
          <div className='control-speed'>
            <label>Speed</label>
            <div className="input-range-wrapper"> 
              <Icon name="add" />              
              <input type="range" step='20' min={minRange} value={speed} max={maxRange} onChange={this.speedChange} />
              <Icon name="minus" />            
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
   stop: Actions.stop,
   replay: () => dispatch(Actions.replay()),
   setSpeed: (speed) => dispatch(Actions.setSpeed(speed)),
   setCurrentTimeStamp: (speed) => dispatch(Actions.setCurrentTimeStamp(speed)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);