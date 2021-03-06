import React from "react";
import PropTypes from "prop-types";
import Element from "../element";

class ElementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.values,
      newValues: this.props.newValues,
      count: this.props.count,
      newCount: this.props.newCount,
      end: this.props.end,
    };
  }

  render() {
    const { values, count, newCount, newValues, end } = this.state;
    const {
      currentTimeStamp,
      speed,
      setEndTimeStamp,
      setStartTimeStamp,
    } = this.props;

    return (
      <div className="array">
        {values.map((element, i) => {
          const elementProps = {
            count: count && count[i],
            newCount: newCount && newCount[i],
            value: element,
            newValue: newValues ? newValues[i] : null,
            end: end,
            speed,
            currentTimeStamp,
            setEndTimeStamp,
            setStartTimeStamp,
          };

          return <Element {...elementProps} />;
        })}
      </div>
    );
  }
}

ElementList.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.element])
  ).isRequired,
  speed: PropTypes.number.isRequired,
  currentTimeStamp: PropTypes.number.isRequired,
  setEndTimeStamp: PropTypes.func.isRequired,
  setStartTimeStamp: PropTypes.func.isRequired,
};

export default ElementList;
