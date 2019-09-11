import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditPrompt from '../EditPrompt/editprompt.js';
import axios from 'axios';


class TodoItem extends React.Component {
    
    handleDelete = (id) => {
        const url = "http://127.0.0.1:8000/api/v1/todoitems/" + id + '/'
        axios.delete(url).then(res =>
            {
                window.location.reload();

            })
    }
    
    render() {
        const {title, description, due_date, status, id} = this.props;
        return (
            <ListItem>
                <ListItemText>
                    <h3>{title}</h3>
                    <p> {description}</p> 
                    <strong> Due Date: </strong>{due_date} 
                    <strong> Status: </strong> {status} 
                </ListItemText>
                <ListItemIcon>
                    <IconButton onClick={evt => this.handleDelete(this.props.id)}>
                        <DeleteIcon/>
                    </IconButton>  
                    <EditPrompt /> 
                </ListItemIcon>
                 
            </ListItem>
                
            
        );
    }
}

export default TodoItem;