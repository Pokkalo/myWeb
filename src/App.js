
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Profile from './components/pages/Profile';
import Experiences from './components/Experiences';

function App() {


  return (
    <div className="App">
     
      
      <Routes>
        <Route exact path='/' element={<Profile/>}/>
        <Route exact path='/hi' element={<Experiences/>}/>

      </Routes>
      

    </div>
  );
}

export default App;
