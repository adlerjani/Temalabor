import React from 'react';

import Box from '@mui/material/Box';
import { borderRadius } from '@mui/system';
import {Draggable} from 'react-beautiful-dnd';

export default class Task extends React.Component{
    render(){
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided=>(
                    <Box sx={
                        {border: '1px solid lightgrey', borderRadius:'2px', padding:'8px',marginBottom:'8px',fontSize:'16px', backgroundColor:'white'}} 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                    {this.props.task.content}
                    </Box>
                )}
                
            </Draggable>
    
        );
    }
}