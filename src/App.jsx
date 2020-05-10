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

  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/:algo'>
                <Header/>
                <Route exact path='/merge-sort' component={MergeSortPage}/>
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
