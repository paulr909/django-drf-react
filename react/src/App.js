import React from "react";
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Form from "./components/Form";
import { baseUrl } from "./utils/baseUrl";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center mb-5">Business Leads</h1>
      <div className="row">
        <div className="col-md-8">
          <DataProvider
            endpoint={baseUrl}
            render={data => <Table data={data} />}
          />
        </div>
        <div className="col-md-4">
          <h2>Add new business lead</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
