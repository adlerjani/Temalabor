import { Box } from "@mui/material";
import { FC } from "react";
import { TaskModel } from "../models/TaskModel";


interface Props{
    todos?:TaskModel;

}

const Task: FC<Props> =({todos:todos})=> {
    if(todos?.content==undefined){
        return null;
    }
    return(
        <Box sx={
            {border: '1px solid lightgrey', borderRadius:'2px', padding:'8px',marginBottom:'8px',fontSize:'16px', backgroundColor:'white'}} >
        
        {todos.content}
        </Box>
    );
}

export default Task;