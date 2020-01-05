import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header'
import MergeSortPage from './pages/merge-sort';

import './App.css'

const algo = ['merge-sort', 'quick-sort'];
const array= [38, 27, 43, 3, 9, 82, 10];

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
