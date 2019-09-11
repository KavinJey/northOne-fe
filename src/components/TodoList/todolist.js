import './todolist.css'
import React from 'react';
import TodoItem from '../TodoItem/todoitem.js';
import List from '@material-ui/core/List';
import axios from 'axios';



class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [], 
            count: 0
        }
    }
    
    componentDidMount() {
        const url = 'http://127.0.0.1:8000/api/v1/todoitems/'
        axios.get(url).then(
            res => {
                this.setState({
                    count: res.data.count,
                    tasks: res.data.results
                })
            }
        );
    }


    render() {
        return (
            <List>
                {
                    this.state.tasks.map((item, key) => {
                        return <TodoItem key={key} id={item.id} title={item.title} description={item.description} status={item.status_of_task} due_date={item.due_date} />
                })
                }
            </List>
        );
    }
}

export default TodoList;