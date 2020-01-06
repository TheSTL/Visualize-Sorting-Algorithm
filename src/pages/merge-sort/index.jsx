import React, {Component} from 'react';
import Array from '../../components/array';

let count = 0;

function mergeSort (unsortedArray) { 
  const tempCount = count++; 
    if (unsortedArray.length <= 1) {
      return [ unsortedArray, 
        <div className='space-around' >
          <Array values={unsortedArray} count={tempCount} />
        </div>
      ];
    }
    const middle = Math.ceil(unsortedArray.length / 2);  
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    const leftResult = mergeSort(left);
    const rightResult = mergeSort(right);
    
    const sortedArray = merge(leftResult[0], rightResult[0]);
    
    return [
      sortedArray, 
      <div className='child' >
          <div className='space-around' >
            <Array values={unsortedArray} count={tempCount} />
          </div>
          <div className='space-around' style={{ width: `${40*3*unsortedArray.length}px`}}>
            {leftResult[1]}
            {rightResult[1]}
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
                mergeSort(this.state.randomArray)[1]
            }
            </div>
        );
    }
}

export default MergeSort;