import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AssignmentIcon from '@mui/icons-material/Assignment';
import Badge from '@mui/material/Badge';

import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Stack from "@mui/material/Stack";

import Task from './task';

export default class ToDoCard extends React.Component{
  render() {
    return(
      <Card sx={{ 
        minWidth: 400, 
        maxWidth:500,
        marginRight:2,
        boxShadow: 3,
        borderRadius: 1,}}>
        <Box sx={{
            backgroundColor:"#ebebeb",
            border:0,
            borderBottom:1,
            borderBlockColor:'black',
            padding:1,

            display:'flex',


        }}>
            <Typography sx={{ fontSize: 20,fontWeight:600,flexGrow:0, paddingTop:1}} color="text.primary">
            {this.props.column.title}
            </Typography>
            <Badge badgeContent={0} color="primary" sx={{ paddingLeft:1 ,flexGrow:1,paddingTop:1}}>
                <AssignmentIcon />
            </Badge>

                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <AddIcon/>
                </IconButton>

        </Box>
        <Box sx={{padding:'8px'}}>
          {this.props.tasks.map(task=><Task key={task.id} task={task}/>)}
        </Box>
    </Card>
    )
  }
}
/* export default function ToDoCard(props){
    return(
        <Card sx={{ 
            minWidth: 400, 
            maxWidth:500,
            marginRight:2,
            boxShadow: 3,
            borderRadius: 1,}}>
            <Box sx={{
                backgroundColor:"#ebebeb",
                border:0,
                borderBottom:1,
                borderBlockColor:'black',
                padding:1,
  
                display:'flex',


            }}>
                <Typography sx={{ fontSize: 20,fontWeight:600,flexGrow:0, paddingTop:1}} color="text.primary">
                {props.name}
                </Typography>
                <Badge badgeContent={0} color="primary" sx={{ paddingLeft:1 ,flexGrow:1,paddingTop:1}}>
                    <AssignmentIcon />
                </Badge>

                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>

            </Box>
            <Box>
              
            </Box>
        </Card>
    );
} */
/* export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth:400, marginRight:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
} */
