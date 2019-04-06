import React from "react";
import DataProvider from "./components/DataProvider";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => (
    <React.Fragment>
        <DataProvider endpoint="http://127.0.0.1:8000/api/" render={data => <Table data={data}/>}/>
        <Form endpoint="http://127.0.0.1:8000/api/"/>
    </React.Fragment>
);


export default App;