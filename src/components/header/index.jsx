import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    
  genrateArray = () => {
    const arrayLength = Math.floor( Math.random()*(20 - 5 + 1)) + 5;
    const maxElementValue = Math.floor( Math.random()*100);
    const newArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * maxElementValue));
    this.props.changeArray(newArray);
  }

    render() {
      return (
        <header className= 'main-header'> 
          <nav>
              <Link to='merge-sort'>Merge Sort</Link>
          </nav>
          <div className='control-btns'>
            <button className='start' onClick={this.genrateArray} > Start</button>
            <button className='playAgain' onClick={this.props.startAgain}>Play Again</button>
            <button className='stop' onClick={this.props.stop}>Stop</button>
          </div>
        </header>
      );
    }
}

Header.propTypes = {
    algorithms: PropTypes.arrayOf(PropTypes.string)
}

export default Header;