import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Icon, Image } from "@chakra-ui/core";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxRange: 1050,
      minRange: 0,
    };
  }
  genrateArray = () => {
    const arrayLength = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    const maxElementValue = Math.floor(Math.random() * 100);
    const newArray = Array.from({ length: arrayLength }, () =>
      Math.floor(Math.random() * maxElementValue)
    );
    this.props.start(newArray);
  };

  speedChange = (e) => {
    this.props.setSpeed(e.target.value);
  };

  speedChangeForReplay = (e) => {
    this.props.setCurrentTimeStamp(Number(e.target.value));
  };

  resetArray = () => {
    this.props.start([]);
  };

  render() {
    const { maxRange, minRange } = this.state;
    const {
      speed,
      replay,
      stop,
      endTimeStamp,
      startTimeStamp,
      currentTimeStamp,
    } = this.props;
    return (
      <header className="main-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Icon name="arrow-back" size="32px" style={{ cursor: "pointer" }} /> Go back
        </Link>
        <div style={{ float: "right" }}>
          <a href="https://github.com/TheSTL/Visualize-Sorting-Algorithm">
            <Image size="32px" src="/github-icon.png" />
          </a>
        </div>
        <div className="control-btns">
          <ButtonGroup spacing={4}>
            <Button variantColor="green" size="md" onClick={this.genrateArray}>
              Start
            </Button>
            <Button
              className="replay"
              variantColor="yellow"
              size="md"
              onClick={replay}
            >
              Replay
            </Button>
            <Button variantColor="red" size="md" onClick={stop}>
              Stop
            </Button>
          </ButtonGroup>
          <div style={{ float: "right" }}>
            <div className="control-speed">
              <label>Control Visualization</label>
              <input
                type="range"
                step="1"
                min={startTimeStamp}
                value={currentTimeStamp}
                max={endTimeStamp}
                onChange={this.speedChangeForReplay}
              />
            </div>
          </div>
        </div>
        <div className="control-speed">
          <label>Speed</label>
          <div className="input-range-wrapper">
            <Icon name="add" />
            <input
              type="range"
              step="20"
              min={minRange}
              value={speed}
              max={maxRange}
              onChange={this.speedChange}
            />
            <Icon name="minus" />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  algorithms: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
