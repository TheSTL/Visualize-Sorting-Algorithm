import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "@chakra-ui/core";
import Reducer from './reducer';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import MergeSortPage from './pages/merge-sort';

import './App.css'

const store = createStore(Reducer);
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      array: [],
      playAgain: false,
      key:0,
      show: false,
      
    }
  }

  changeArray = (array) => {
    this.stop();
    this.setState({
      array,
      show: true,
    })    
  }

  start = () => {
    this.stop();
    this.setState({
      key: this.state.key + 1,
      show: true
    })
  }

  stop = () => {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id); 
    }
  }

  setShowFalse = () => {
    this.setState({
      show: false,
    });
  }

  setCurrentTimeStamp = (currentTimeStamp) => {
    this.setState({
      currentTimeStamp,
    });
  }

  setStartTimeStamp = (startTimeStamp) => {
    this.setState({
      startTimeStamp,
    });
  }

  setEndTimeStamp = (endTimeStamp) => {
    this.setState({
      endTimeStamp,
    });
  }


  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/:algo'>
                <Header 
                  changeArray={this.changeArray} 
                  start={this.start} 
                  stop={this.stop}
                />
                <Route 
                  exact 
                  path='/merge-sort' 
                  component={() => 
                    <MergeSortPage 
                      array={this.state.array}
                      key={this.state.key}
                      show={this.state.show}
                      setShowFalse={this.setShowFalse}
                    />
                  } 
                />
              </Route>
          </Switch>
          <Footer />
          </Router>
        </ThemeProvider>
      </div>
      </Provider>
    );
  }
}

export default App;
