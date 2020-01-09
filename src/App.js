import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import MergeSortPage from './pages/merge-sort';

import './App.css'

const algo = ['merge-sort', 'quick-sort'];
const array= [38, 27, 43, 3, 9, 82, 10, 11, 20, 30, 40, 12, 44, 12, 13];
window.SPEED= 200;
window.COUNT= 0;

function App() {
  return (
    <div className="App">
      <Router>
        <Header algorithms={algo} />
        <main>
          <Switch>
            <Route exact path='/merge-sort' component={() => <MergeSortPage array={array}/>} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
