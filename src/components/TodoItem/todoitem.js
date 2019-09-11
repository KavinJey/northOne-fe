import React from 'react';

class TodoItem extends React.Component {
    
    
    
    render() {
        const {title, description, due_date, status} = this.props;
        return (
            <div>
                {title} {description} {due_date} {status}
            </div>
        );
    }
}

export default TodoItem;