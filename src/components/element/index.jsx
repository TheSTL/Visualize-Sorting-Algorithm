import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/core";

import "./index.css";

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      newValue: this.props.newValue,
      count: this.props.count,
      newCount: this.props.newCount,
      end: this.props.end,
      history: [],
    };
    this.divElement = React.createRef();
  }
  componentDidMount() {
    const { count } = this.state;
    const { speed } = this.props;
    // add the initial state to history
    if (this.divElement.current) {
      const newHistoryItem = React.createElement("div", {
        className: this.divElement.current.classList.value,
        dangerouslySetInnerHTML: { __html: this.divElement.current.innerHTML },
      });
      this.setState({
        history: [
          {
            reactItem: newHistoryItem,
            time: performance.now(),
          },
        ],
      });
    }
    // observer to store history of element
    const mainRef = document.querySelector(
      `.array-element.element-no-${count}`
    );
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(this.observerCallback);
    observer.observe(mainRef, config);

    setTimeout(this.changeElement, this.state.newCount * speed);
    setTimeout(this.showElement, this.state.count * speed);
  }

  observerCallback = (mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes") {
        const newHistoryItem = React.createElement("div", {
          className: mutation.target.classList.value,
          dangerouslySetInnerHTML: { __html: mutation.target.innerHTML },
        });
        this.setState((prevState) => ({
          history: [
            ...prevState.history,
            {
              reactItem: newHistoryItem,
              time: performance.now(),
            },
          ],
        }));
      }
    }
  };

  showElement = () => {
    const { count } = this.state;
    const { setStartTimeStamp } = this.props;
    if (count === 0) {
      setStartTimeStamp(performance.now());
    }
    if (this.divElement.current) {
      this.divElement.current.classList.remove("hide");
    }
    if (this.state.end) {
      this.changeBorder();
    }
  };

  changeElement = async () => {
    const { newValue, value, count, newCount } = this.state;

    if (count > newCount) return;

    this.setState({
      value: newValue || newValue === 0 ? newValue : value,
    });
    this.changeBorder();
  };

  changeBorder = () => {
    const { setEndTimeStamp, speed } = this.props;
    const arrayElementRef = this.divElement.current;
    if (arrayElementRef) {
      arrayElementRef.classList.remove("unsorted");
      arrayElementRef.classList.add("zoom-in-with-sorted");
      setTimeout(() => {
        if (arrayElementRef) {
          arrayElementRef.classList.add("zoom-out");
        }
        // set the end time stamp for the last sort element change
        setEndTimeStamp(performance.now());
      }, speed);
    }
  };

  render() {
    const { value, count, history } = this.state;
    const { currentTimeStamp } = this.props;
    // currentTimseStamp zero means control range slider is not moved
    if (!currentTimeStamp) {
      return (
        <Box
          className={`array-element unsorted hide element-no-${count}`}
          ref={this.divElement}
        >
          {value}
        </Box>
      );
    }
    const past = history.filter((history) => {
      if (history.time > currentTimeStamp) return false;
      return true;
    });

    return (
      <React.Fragment>
        {past[past.length - 1] && past[past.length - 1].reactItem}
      </React.Fragment>
    );
  }
}

Element.propTypes = {
  count: PropTypes.number.isRequired,
  newCount: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.element]).isRequired,
  newValue: PropTypes.number,
  end: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
  currentTimeStamp: PropTypes.number.isRequired,
  setEndTimeStamp: PropTypes.func.isRequired,
  setStartTimeStamp: PropTypes.func.isRequired,
};

export default Element;
