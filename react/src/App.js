import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Form from "./components/Form";
import { baseUrl } from "./utils/baseUrl";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h1 className="text-center mb-3">Business Leads</h1>
                  <DataProvider
                    endpoint={baseUrl}
                    render={data => <Table data={data} />}
                  />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/form">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h1 className="text-center mb-3">Add new business lead</h1>
                  <Form />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
