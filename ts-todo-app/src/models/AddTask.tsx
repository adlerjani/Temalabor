import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { CardModel } from './CardModel';
import { TaskModel } from "../models/TaskModel";
import axios from 'axios';

interface Props{
    card: CardModel;

}

const AddTask: FC<Props>=({card:card})=>{

        const [open, setOpen] = React.useState(false);
        const [value,setValue]=React.useState('');

        
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const handleChange = (event:any) => {
            setValue(event.target.value);
            //console.log(value);
        }
        
        const handleSubmit=(event:any) => {
            handleChange(event)
            event.preventDefault();
            setOpen(false);
            //console.log(value);
            //console.log(card.todos)

            const newTask={
                todoId:card.todos.length+1,
                columnId:card.columnId,
                content:value,
                orderId:0,
    
            }

            const headers = { 
                "Access-Control-Allow-Origin": "*"
            };
            console.log("New Task: " + newTask.todoId, newTask.columnId, newTask.content, newTask.orderId);
            axios.post('http://localhost:5240/api/Todos', newTask,{headers})
            .then(res =>{
                console.log("Sikerült!");
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
                console.log(error.response);
                console.log(error.request);
                console.log(error.message);
            });
            
            
        }

      
    return (
        <Box>
            <IconButton onClick={handleClickOpen}>
        <AddCircleRoundedIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{card.title} - Add Task - {card.columnId}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id=""
            fullWidth
            variant="standard"
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
        </Box>
    );
}

export default AddTask;