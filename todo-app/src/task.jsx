import React from 'react';

import Box from '@mui/material/Box';
import { borderRadius } from '@mui/system';

export default class Task extends React.Component{
    render(){
        return <Box sx={{border: '1px solid lightgrey', borderRadius:'2px', padding:'8px',marginBottom:'8px',fontSize:'16px', backgroundColor:'white'}}>
            {this.props.task.content}
        </Box>;
    }
}