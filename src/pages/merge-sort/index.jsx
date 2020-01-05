import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Array from '../../components/array';

let node = [];

function mergeSort (unsortedArray, count ) {
    let root = document.getElementsByClassName(`root${count}`);
    if (root.length === 0) {
        root = document.createElement('div');
        root.className = `root${count} root-row`;
        node[count]= [];
        node[count].push(<Array values={unsortedArray} />);

    } else {
        root = root[0]
        node[count].push(<Array values={unsortedArray} />);
    }   
    console.log(node);
    
    document.getElementsByClassName(`visRoot`)[0].appendChild(root);

    
    ReactDOM.render(<React.Fragment>
        {
            node[count]
        }
        </React.Fragment>,root);

    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);  
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(
      mergeSort(left, count + 1), mergeSort(right, count + 1)
    );
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
            <button onClick={()=>{ mergeSort(this.state.randomArray, 0) }}>SORT NOW</button>
            </div>
        );
    }
}

export default MergeSort;