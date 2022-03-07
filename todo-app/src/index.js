import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


function App(){
    return(
        <body>
            <h1 class="header-text">To-Do App</h1>
        </body>
        
    )
}

ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
  );