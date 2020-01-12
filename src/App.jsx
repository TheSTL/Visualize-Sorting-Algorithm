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
      key:0,
    }
  }

  changeArray = (array) => {
    this.stop();
    this.setState({
      array,
      key:0
    })
    console.log(array);

  }

  startAgain = () => {
    this.stop();
    this.setState({
      key: this.state.key + 1,
    })
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
            startAgain={this.startAgain} 
            stop={this.stop}
          />
            <Switch>
              <Route 
                exact 
                path='/merge-sort' 
                component={() => 
                  <MergeSortPage 
                    array={this.state.array}
                    startAgain={this.startAgain}
                    setRenderAgain={this.setRenderAgain}
                    key={this.state.key}
                  />
                } 
              />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
