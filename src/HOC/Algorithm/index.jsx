import React from "react";
import Header from "../../components/header";

const Algorithm = (Wrapper) => {
  return class Hoc extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        array: [],
        playAgain: false,
        divKey: 0,
        show: false,
        speed: 50,
        startTimeStamp: 0,
        endTimeStamp: 0,
        currentTimeStamp: 0,
        isLoading: false,
      };
    }

    start = (array) => {
      this.setState((prevState) => ({
        divKey: prevState.divKey + 1,
        array: array,
        startTimeStamp: 0,
        endTimeStamp: 0,
        currentTimeStamp: 0,
      }));
    };

    replay = () => {
      this.setState((prevState) => ({
        divKey: prevState.divKey + 1,
        startTimeStamp: 0,
        endTimeStamp: 0,
        currentTimeStamp: 0,
      }));
    };

    stop = () => {
      let id = window.setTimeout(function () {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };

    setSpeed = (speed) => {
      this.setState({
        speed,
      });
    };

    setCurrentTimeStamp = (currentTimeStamp) => {
      this.setState({
        currentTimeStamp,
      });
    };

    setStartTimeStamp = (startTimeStamp) => {
      this.setState({
        startTimeStamp,
      });
    };

    setEndTimeStamp = (endTimeStamp) => {
      this.setState({
        endTimeStamp,
      });
    };

    render() {
      const {
        speed,
        currentTimeStamp,
        startTimeStamp,
        endTimeStamp,
        array,
        divKey,
      } = this.state;
      const {
        start,
        replay,
        stop,
        setSpeed,
        setCurrentTimeStamp,
        setStartTimeStamp,
        setEndTimeStamp,
      } = this;
      const headerProps = {
        start,
        replay,
        stop,
        setSpeed,
        setCurrentTimeStamp,
        speed,
        currentTimeStamp,
        startTimeStamp,
        endTimeStamp,
      };
      const wrapperProps = {
        array,
        divKey,
        replay,
        speed,
        startTimeStamp,
        currentTimeStamp,
        setEndTimeStamp,
        setStartTimeStamp,
      };
      return (
        <React.Fragment>
          <Header {...headerProps} />
          <Wrapper {...wrapperProps} />
        </React.Fragment>
      );
    }
  };
};

export default Algorithm;