import { Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { FC } from "react";
import { CardModel } from "../models/CardModel";
import ClearIcon from '@mui/icons-material/Clear';
import { TaskModel } from "../models/TaskModel";

interface Props{
    todos:TaskModel;
}

const RemoveTask: FC<Props> =({todos:todos})=>{

        const [open, setOpen] = React.useState(false);
        const [value,setValue]=React.useState('');

        
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const handleSubmit=() => {

            const headers = { 
                "Access-Control-Allow-Origin": "*"
            };
            //console.log("New Task: " + newTask.todoId, newTask.columnId, newTask.content, newTask.orderId);
            axios.delete('http://localhost:5240/api/Todos/'+todos.todoId,{headers})
            .then(res =>{
                console.log("Sikerült!");
                console.log(res);
                console.log(res.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('There was an error!', error);
                console.log(error.response);
                console.log(error.request);
                console.log(error.message);
            });
            
            
        };


    return(
        <Box>
            <IconButton onClick={handleClickOpen}>
        <ClearIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Remove Task</DialogTitle>
        <DialogContent>
            Do you really want to remove this: {todos.content}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleSubmit}>Yes</Button>
        </DialogActions>
      </Dialog>
        </Box>
    )
}


export default RemoveTask;