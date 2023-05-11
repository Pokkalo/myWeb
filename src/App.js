
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Helmet} from "react-helmet";

import Profile from './components/pages/Profile';
import Experiences from './components/Experiences';
import Nav_bar from './components/Nav_bar';

function App() {


  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Pokkalo Property</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Pokkalo Property" />
      </Helmet>

      <Nav_bar/>
      
      <Routes>
        <Route exact path='/' element={<Profile/>}/>
        <Route exact path='/hi' element={<Experiences/>}/>

      </Routes>
      

    </div>
  );
}

export default App;
