import React, { useMemo } from "react";
import PropTypes from "prop-types";
import ElementList from "../../components/elementList";
import AlogithmHoc from "../../HOC/Algorithm";

function QuickSort({
  speed,
  currentTimeStamp,
  setEndTimeStamp,
  setStartTimeStamp,
  divKey,
  array,
}) {
  const renderQuickSort = useMemo(() => {
    let count = 0;
    const quickSort = (items, left, right) => {
      const partitionResult = partition(items, left, right);
      const index = partitionResult[0];
      const centerElement = partitionResult[1];
      let leftElement;
      let rightElement;

      if (left < index - 1) {
        leftElement = quickSort(items, left, index - 1);
      } else if (left === index - 1) {
        count++;
        leftElement = (
          <div className="space-around">
            <ElementList
              values={[items[index - 1]]}
              count={[count]}
              end={true}
              speed={speed}
              currentTimeStamp={currentTimeStamp}
              setEndTimeStamp={setEndTimeStamp}
              setStartTimeStamp={setStartTimeStamp}
            />
          </div>
        );
      }

      if (index < right) {
        rightElement = quickSort(items, index, right);
      } else if (index === right) {
        count++;
        rightElement = (
          <div className="space-around">
            <ElementList
              values={[items[index]]}
              count={[count]}
              end={true}
              speed={speed}
              currentTimeStamp={currentTimeStamp}
              setEndTimeStamp={setEndTimeStamp}
              setStartTimeStamp={setStartTimeStamp}
            />
          </div>
        );
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
    };

    const partition = (items, left, right) => {
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
          speed={speed}
          currentTimeStamp={currentTimeStamp}
          setEndTimeStamp={setEndTimeStamp}
          setStartTimeStamp={setStartTimeStamp}
        />,
      ];
    };
    return quickSort([...array], 0, array.length - 1);
  }, [array, speed, currentTimeStamp, setEndTimeStamp, setStartTimeStamp]);

  return (
    <React.Fragment>
      <h1>Quick Sort</h1>
      <div className="current" />
      <div key={divKey} className="visRoot quick-sort">
        {renderQuickSort}
      </div>
    </React.Fragment>
  );
}

QuickSort.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  divKey: PropTypes.number.isRequired,
  setEndTimeStamp: PropTypes.func.isRequired,
  setStartTimeStamp: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  currentTimeStamp: PropTypes.number.isRequired,
};

export default AlogithmHoc(QuickSort);
