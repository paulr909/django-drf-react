import React from "react";
import Data from "./components/Data";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => (
    <div className="container-fluid">
        <h1 className="text-center mb-5">Business Leads</h1>
        <div className="row">
            <div className="col-md-8">
                <Data endpoint="http://127.0.0.1:8000/api/"
                      render={data => <Table data={data}/>}/>
            </div>
            <div className="col-md-4">
                <h2>Add new business lead</h2>
                <Form endpoint="http://127.0.0.1:8000/api/"/>
            </div>
        </div>
    </div>
);

export default App;