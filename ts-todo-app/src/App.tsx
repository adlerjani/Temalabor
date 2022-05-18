import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';


interface IProps{


}

interface IState{

}

class App extends React.Component<IProps, IState>{
  
  render() {
    return (
      <body>
      <h1 className="header-text">To-Do App</h1>
      <hr></hr>
      <div className="card-row">
      <Board></Board>
      </div>
  </body>
    );
  }

}

export default App;
