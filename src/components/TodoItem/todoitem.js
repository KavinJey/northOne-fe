import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
class TodoItem extends React.Component {
    
    
    
    render() {
        const {title, description, due_date, status} = this.props;
        return (
            <ListItem>
                <ListItemText>
                    {title} <br /> {description} <br />
                    {due_date} {status}
                </ListItemText>
                <ListItemIcon>

                </ListItemIcon>
                 
            </ListItem>
                
            
        );
    }
}

export default TodoItem;