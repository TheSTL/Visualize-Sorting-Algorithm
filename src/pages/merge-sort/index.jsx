import React, { useMemo } from "react";
import ElementList from "../../components/elementList";
import AlogithmHoc from "../../HOC/Algorithm";

let count = 0;

function MergeSort({
  speed,
  startTimeStamp,
  currentTimeStamp,
  setEndTimeStamp,
  setStartTimeStamp,
  divKey,
  array,
}) {
  const renderMergeSort = useMemo(() => {
    count = 0;
    const merge = (left, right) => {
      let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }
      count += left.length + right.length;

      return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };
    const mergeSort = (unsortedArray) => {
      const tempCount = (count += unsortedArray.length);
      const countArray = unsortedArray.map(
        (_, i) => tempCount - unsortedArray.length + i
      );

      if (unsortedArray.length <= 1) {
        return [
          unsortedArray,
          <div className="space-around">
            <ElementList
              values={unsortedArray}
              count={countArray}
              end={true}
              speed={speed}
              startTimeStamp={startTimeStamp}
              currentTimeStamp={currentTimeStamp}
              setEndTimeStamp={setEndTimeStamp}
              setStartTimeStamp={setStartTimeStamp}
            />
          </div>,
        ];
      }

      const middle = Math.ceil(unsortedArray.length / 2);
      const left = unsortedArray.slice(0, middle);
      const right = unsortedArray.slice(middle);

      const leftResult = mergeSort(left);
      const rightResult = mergeSort(right);

      const sortedArray = merge(leftResult[0], rightResult[0]);
      const newCountArray = unsortedArray.map(
        (_, i) => count - (unsortedArray.length - i)
      );

      return [
        sortedArray,
        <div className="child">
          <div className="space-around">
            <ElementList
              values={unsortedArray}
              newValues={sortedArray}
              count={countArray}
              newCount={newCountArray}
              end={false}
              speed={speed}
              startTimeStamp={startTimeStamp}
              currentTimeStamp={currentTimeStamp}
              setEndTimeStamp={setEndTimeStamp}
              setStartTimeStamp={setStartTimeStamp}
            />
          </div>
          <div
            className="space-around"
            style={{ width: `${22 * 3 * unsortedArray.length}px` }}
          >
            {leftResult[1]}
            {rightResult[1]}
          </div>
        </div>,
      ];
    };
    return mergeSort(array)[1];
  }, [array, divKey, currentTimeStamp]);

  return (
    <React.Fragment>
      <h1>Merge Sort</h1>
      <div className="current" />
      <div key={divKey} className="visRoot merge-sort">
        {renderMergeSort}
      </div>
    </React.Fragment>
  );
}

export default AlogithmHoc(MergeSort);
