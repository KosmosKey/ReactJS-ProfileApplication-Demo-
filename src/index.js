import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import PersonDetail from "./component/PersonDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Heading from "./component/Heading";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

import promisseMiddleware from "redux-promise";

const createStoreMiddleware = applyMiddleware(promisseMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStoreMiddleware(rootReducer)}>
    <BrowserRouter>
      <Heading />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={PersonDetail} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
