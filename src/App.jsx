import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import HomePage from './pages/home';
import MergeSortPage from './pages/merge-sort';

import './App.css'

window.SPEED= 200;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      array: [],
      playAgain: false,
      key:0,
      renderFun: null,
    }
  }

  changeArray = (array) => {
    this.stop();
    this.setState({
      array,
      key: this.state.key + 1
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
          <Switch>
                <Route 
                  exact
                  path='/'
                  component={HomePage}
                />
          </Switch>
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
