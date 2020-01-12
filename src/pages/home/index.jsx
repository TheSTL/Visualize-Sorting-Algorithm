import React from 'react';
import {Link} from 'react-router-dom';
function Home () {
    return (
      <div className="home">
        <h1 className="heading">
            Visualize Sorting Algorithms..
        </h1>
        <ul>
          <li><Link to='merge-sort'>Merge sort</Link></li>
        </ul>
      </div>
    );
}

export default Home;
