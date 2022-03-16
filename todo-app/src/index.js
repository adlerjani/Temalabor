import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//mport Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
import './index.css';

import ToDoCard from './card.js';
import initialData from './initialdate';


function App(){

    return(
        
        <body>
            <h1 className="header-text">To-Do App</h1>

            <hr></hr>
            <div className="card-row">
            <ToDoCard name="To-Do"/>


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