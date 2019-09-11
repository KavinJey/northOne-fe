import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import 'date-fns';
import axios from 'axios';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



class Prompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            date: new Date('2019-01-01'),
            title: '',
            description: '',
            status: 'Not Started'
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }


    handleSubmit = () => {
        const data = new FormData();

        // Setting up form data to be sent over
        data.set('title', this.state.title);
        data.set('description', this.state.description);
        data.set('title', this.state.title);
        data.set('due_date', this.state.date);
        data.set('status_of_task', this.state.status);
    
        axios.post('http://127.0.0.1:8000/api/v1/todoitems/', data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        // Closing up dialog
        this.setState({
            open: false
        });
    }

    updateTitleValue = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    updateDescriptionValue = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    updateDateValue = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    updateStatusValue = (event) => {
        this.setState({
            status: event.target.value
        })
    }


    render() {
        const classes = this.props;
        const values = ['Done', 'Pending', 'Not Started']
        return (
            <div>

                <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleClickOpen}>
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Task</DialogTitle>

                    <form>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Title"
                                type="text"
                                fullWidth
                                value={this.state.title}
                                onChange={evt => this.updateTitleValue(evt)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="description"
                                label="Description"
                                type="text"
                                fullWidth
                                multiline
                                rows={4}
                                value={this.state.description}
                                onChange={evt => this.updateDescriptionValue(evt)}
                            />

                            <TextField
                                id="due_date"
                                label="Due Date"
                                type="date"
                                value={this.state.date}
                                onChange={evt => this.updateDateValue(evt)}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <InputLabel htmlFor="status-of-task">Status</InputLabel>
                            <Select

                                value={this.state.status}
                                onChange={this.updateStatusValue}

                                inputProps={{
                                    name: 'Status',
                                    id: 'status-of-task',
                                }}
                            >
                                <MenuItem value={values[2]}>Not Started</MenuItem>
                                <MenuItem value={values[1]}>Pending</MenuItem>
                                <MenuItem value={values[0]}>Done</MenuItem>
                            </Select>




                        </DialogContent>
                        <DialogActions>

                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default Prompt;