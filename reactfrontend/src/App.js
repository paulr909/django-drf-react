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

// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"/>
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                     </a>
//                 </header>
//             </div>
//         );
//     }
// }
//
// export default App;