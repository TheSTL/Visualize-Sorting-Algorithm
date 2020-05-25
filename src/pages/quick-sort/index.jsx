import React from "react";
import { connect } from "react-redux";
import ElementList from "../../components/elementList";
import { Actions } from "../../action";

let count = 0;

function quickSort(items, left, right) {
  if (items.length === 1) {
    count++;
    return (
      <div className="space-around">
        <ElementList values={items[0]} count={count} end={true} />
      </div>
    );
  }
  const partitionResult = partition(items, left, right);
  const index = partitionResult[0];
  const centerElement = partitionResult[1];
  let leftElement;
  let rightElement;
  if (left < index - 1) {
    leftElement = quickSort(items, left, index - 1);
  }
  if (index < right) {
    rightElement = quickSort(items, index, right);
  }

  return (
    <div className="child">
      <div className="space-around">{centerElement}</div>
      <div
        className="space-around"
        style={{ width: `${22 * 3 * (right - left + 1)}px` }}
      >
        {leftElement}
        {rightElement}
      </div>
    </div>
  );
}

function partition(items, left, right) {
  const midIndex = Math.floor((right + left) / 2);
  const pivot = items[midIndex];
  let i = left;
  let j = right;
  const valuesWithLabel = [...items];
  valuesWithLabel[midIndex] = (
    <React.Fragment>
      {pivot}
      <span className="pivot-label">Pivot</span>
    </React.Fragment>
  );

  const values = valuesWithLabel.slice(left, right + 1);
  const countArray = values.map((_) => count++);
  const newCountArray = [];

  while (i <= j) {
    while (items[i] < pivot) {
      newCountArray[i] = count++;
      i++;
    }
    while (items[j] > pivot) {
      newCountArray[j] = count++;
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      newCountArray[i] = count;
      newCountArray[j] = count;
      count++;
      i++;
      j--;
    }
  }
  const newValues = items.slice(left, right + 1);

  return [
    i,
    <ElementList
      values={values}
      newValues={newValues}
      count={countArray}
      newCount={newCountArray.slice(left, right + 1)}
      end={false}
    />,
  ];
}

class QuickSort extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      randomArray: props.array,
      key: props.key,
      renderQuickSort: quickSort(props.array, 0, props.array.length - 1),
    };
  }

  componentDidUpdate(props) {
    if (props.array !== this.props.array) {
      this.setState({
        renderQuickSort: quickSort(
          this.props.array,
          0,
          this.props.array.length - 1
        ),
      });
      // key value should update after quickSort fun
      this.props.replay();
    }
  }

  render() {
    const { divKey } = this.props;
    count = 0;
    return (
      <React.Fragment>
        <h1>Quick Sort</h1>
        <div className="current" />
        <div key={divKey} className="visRoot quick-sort">
          {this.state.renderQuickSort}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    array: state.array,
    divKey: state.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    replay: () => dispatch(Actions.replay()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSort);
