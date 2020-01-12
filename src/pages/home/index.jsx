import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component {
  constructor() {
    super();
    this.state= {
      mergeSortIsHovering: false
    }
  }

  onMouseEnter = (option) => {
    this.setState({
      [option]: true
    })
  }

  onMouseLeave = (option) => {
    this.setState({
      [option]: false
    })
  }

  render() {
    const { mergeSortIsHovering } = this.state;
    return (
      <div className="home">
        <h1 className="heading">
            Visualize Sorting Algorithms..
        </h1>
        <h5 className='note'> 
          <span className='important'>*</span> 
            Hover below items for preview 
          <span className="important">*</span> 
        </h5>
        <ul>
          <li  
            onMouseLeave={() =>{this.onMouseLeave('mergeSortIsHovering')}}
            onMouseEnter={() =>{this.onMouseEnter('mergeSortIsHovering')}}
          >
            <Link 
              to='merge-sort'
            >
                Merge sort
            </Link>
            {
              mergeSortIsHovering && 
                <img src="/merge-sort.gif" alt="merge sort"/>
            }

          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
