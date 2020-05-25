import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import Reducer from "./reducer";
import Header from "./components/header";
import HomePage from "./pages/home";
import MergeSortPage from "./pages/merge-sort";
import QuickSortPage from "./pages/quick-sort";

import "./App.css";

const store = createStore(Reducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ThemeProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/:algo">
                  <Header />
                  <Route exact path="/merge-sort" component={MergeSortPage} />
                  <Route exact path="/quick-sort" component={QuickSortPage} />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
