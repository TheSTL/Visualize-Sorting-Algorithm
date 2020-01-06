import React, {Component} from 'react';
import Array from '../../components/array';

function mergeSort (unsortedArray, count ) {
    console.log(unsortedArray);
    
    if (unsortedArray.length <= 1) {
      return [ unsortedArray, 
        <div className='space-around' >
          <Array values={unsortedArray} />
        </div>
      ];
    }
    const middle = Math.ceil(unsortedArray.length / 2);  
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    const leftResult = mergeSort(left, count + 1);
    const rightResult = mergeSort(right, count + 1);
    
    const sortedArray = merge(leftResult[0], rightResult[0]);
    
    return [
      sortedArray, 
      <div className='child' >
          <div className='space-around' >
            <Array values={unsortedArray} />
          </div>
          <div className='space-around' style={{ width: `${40*3*unsortedArray.length}px`}}>
            {leftResult[1]}
            {rightResult[1]}
          </div>
          <div className='space-around'>
            <Array values={sortedArray} />
          </div>
      </div>

    ];
  }

  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; 
      }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

class MergeSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomArray: props.array,
        }
    }

    render() {        
        return( <div className='visRoot'>
            {
                mergeSort(this.state.randomArray, 0)
            }
            </div>
        );
    }
}

export default MergeSort;