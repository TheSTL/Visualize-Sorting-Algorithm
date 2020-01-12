import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import MergeSortPage from './pages/merge-sort';

import './App.css'

window.SPEED= 200;
window.timeOutIds= [];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      array: [],
      playAgain: false,
    }
  }

  changeArray = (array) => {
    this.stop();
    this.setState({
      array
    })
    console.log(array);
    
  }

  startAgain = () => {

  }

  stop = () => {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id); 
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Header 
            changeArray={this.changeArray} 
            stop={this.stop}
          />
          <main>
            <Switch>
              <Route 
                exact 
                path='/merge-sort' 
                component={() => 
                  <MergeSortPage 
                    array={this.state.array}
                    startAgain={this.startAgain}
                  />
                } 
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
