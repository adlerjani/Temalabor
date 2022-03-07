import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//mport Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
import './index.css';

import BasicCard from './card.js';




function App(){
    return(
        
        <body>
            <h1 className="header-text">To-Do App</h1>
            <div className="card-row">
            
            <BasicCard />
            <BasicCard />
            </div>
        </body>
        
    )
}

ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
  );