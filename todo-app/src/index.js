import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd';
import { BrowserRouter } from 'react-router-dom';
//mport Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
import './index.css';

import ToDoCard from './card';
import initialData from './initialdate';


class AppBoard extends React.Component{
    state =initialData;
    onDragEnd= result =>{
      
    }
    render(){
        return( 
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map(columnId=>{
            const column=this.state.columns[columnId];
            const tasks=column.taskIds.map(taskId=>this.state.tasks[taskId]);

            //return column.title;
            return <ToDoCard key={column.id} column={column} tasks={tasks}/>;
        })}
        </DragDropContext>
        );
}
}

class App extends React.Component {
    render() {
      return(
        <body>
        <h1 className="header-text">To-Do App</h1>

        <hr></hr>
        <div className="card-row">
        <AppBoard/>
        


        </div>
    </body>
      );
    }
  }

ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
  );