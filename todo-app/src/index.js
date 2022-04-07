import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd';
import { BrowserRouter } from 'react-router-dom';
//mport Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
import './index.css';

import ToDoCard from './card';
import initialData from './initialdate';

import Box from '@mui/material/Box';

/* interface xyComponentProps{
  name:streg,
  addNewItemIntoLsit: (item: Item)  => any
}

const xyComp : FC<xyComponentProps> ({name: name, addNewItemIntoLsit: addNewItemIntoLsit}) =>{
  
  const handler = () => {
    
  }

  return(
    <Button onClick={habdler}/>
  )
} */

class AppBoard extends React.Component{

    state =initialData;
    onDragEnd= result =>{
      const{destination,source,draggableId}=result;
      
      if(!destination){
        return;
      }

      if(destination.droppableId===source.droppableId && destination.index === source.index){
        return;
      }

      const start=this.state.columns[source.droppableId];
      const finish=this.state.columns[destination.droppableId];

      if(start===finish){
        const newTaskIds=Array.from(start.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn={
          ...start,
          taskIds: newTaskIds,
        };

        const newState={
          ...this.state,
          columns:{
            ...this.state.columns,
            [newColumn.id]: newColumn,
          }
        };

          this.setState(newState);
          return;
        }
        
        //másik kártyára húzni
        const startTaskIds=Array.from(start.taskIds);
        startTaskIds.splice(source.index,1);
        const newStart={
          ...start,
          taskIds:startTaskIds,
        };
        
        const finishTaskIds=Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index,0,draggableId);
        const newFinish={
          ...finish,
          taskIds:finishTaskIds,
        };

        const newState={
          ...this.state,
          columns:{
            ...this.state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };
        this.setState(newState);



    };
    render(){
        return( 
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Box sx={
            {display: 'flex'}
          }>
            {this.state.columnOrder.map(columnId=>{
            const column=this.state.columns[columnId];
            const tasks=column.taskIds.map(taskId=>this.state.tasks[taskId]);

            //return column.title;
            return <ToDoCard key={column.id} column={column} tasks={tasks}/>;
        })}
        </Box>
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