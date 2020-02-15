import React, { useState, useImperativeHandle } from 'react';
import { Router } from "@reach/router";
import Home from './components/Home'
import About from './components/About'
import { ConsoleWriter } from 'istanbul-lib-report';
import { func } from 'prop-types';


function App() {

  return (
    <div>
      <Router> 
       <Home path="/"/>
       <About path="/:id"/>
    </Router>
    </div>
  );
}

export default App;
