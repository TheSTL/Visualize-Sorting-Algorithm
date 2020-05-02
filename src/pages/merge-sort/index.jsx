/* eslint-disable react/no-danger-with-children */
/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import Array from '../../components/array';

let count = 0;

function mergeSort(unsortedArray) { 
  const tempCount = count+= unsortedArray.length;
  
    if (unsortedArray.length <= 1) {
      return [ unsortedArray, 
        <div className='space-around' >
          <Array 
            values={unsortedArray} 
            count={tempCount} 
            end={true}
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
  
    return [
      sortedArray, 
      <div className='child' >
          <div className='space-around' >
            <Array 
              values={unsortedArray} 
              newValues={sortedArray}
              count={tempCount} 
              newCount={count}
              end={false}
            />
          </div>
          <div className='space-around' style={{ width: `${22*3*unsortedArray.length}px`}}>
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
    count+= left.length + right.length;

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

class MergeSort extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            randomArray: props.array,
            key: props.key,
            renderMergeSort: mergeSort(props.array)[1],
          }
    }

    componentDidUpdate(props) {      
      if (props.array !== this.props.array) {  
        this.setState({
          renderMergeSort: mergeSort(this.props.array)[1]
        })
      }
    }
        
    render() {   
      const { key } = this.props;   
      count=0;
        return(
          <React.Fragment>
            <h1>Merge Sort</h1>
            <div className="current" />
            <div key={key} className='visRoot merge-sort'>
              { this.state.renderMergeSort }
            </div>
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {  
  console.log(state);
  return {
    array: state.array,
    key: state.key,
  }
}

export default  connect(mapStateToProps, null)(MergeSort);