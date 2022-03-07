import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';

import BasicCard from './card.js';

import './index.css';


function App(){
    return(
        
        <body>
            <h1 class="header-text">To-Do App</h1>
            <Row>
            <BasicCard />
            </Row>
            
            
            
            
        </body>
        
    )
}

ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
  );