import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import HomePage from "./pages/home";
import MergeSortPage from "./pages/merge-sort";
import QuickSortPage from "./pages/quick-sort";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/:algo">
                <Route exact path="/merge-sort" component={MergeSortPage} />
                <Route exact path="/quick-sort" component={QuickSortPage} />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
