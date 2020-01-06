import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import MergeSortPage from './pages/merge-sort';

import './App.css'

const algo = ['merge-sort', 'quick-sort'];
const array= [1, 2, 3, 4, 5, 6,7,8,9,1];

function App() {
  return (
    <div className="App">
      <Router>
        <Header algorithms={algo} />
        <main>
          <Switch>
            <Route exact='/merge-sort' component={() => <MergeSortPage array={array}/>} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
