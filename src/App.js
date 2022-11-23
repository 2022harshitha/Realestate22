import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Switch} from 'react-router-dom'
import Addnewproperty from './Components/Addnewproperty'
import Basicinfo from './Components/Basicinfo';
import Generalinfo from './Components/Generalinfo'
import Locationinfo from './Components/Locationinfo'
import Propertydetail from './Components/Propertydetail'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" component = {Addnewproperty}></Route>
    <Route path="/basicinfo" component={Basicinfo}></Route>
    <Route path="/generalinfo" component = {Generalinfo}></Route>
    <Route path="/locationinfo" component = {Locationinfo}></Route>
    <Route path="/propertydetail" component = {Propertydetail}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
