import React from 'react';
import {connect} from "react-redux";

const TodoItem = ({task, updateInput, editActive, deleteTask, index, moveUp, moveDown}) => {
    return <li style={{display: "flex"}}>

        <button style={{margin: "5px"}} onClick={() => moveUp(index)}>&uarr;</button>
        <button style={{margin: "5px"}} onClick={() => moveDown(index)}>&darr;</button>

        <p style={{marginRight: "0px"}}>{task.name}</p>

        <button style={{margin: "10px"}} onClick={() => {
            editActive(true, task.id);
            updateInput(task.name);
        }}>
            Edit
        </button>
        <button style={{margin: "10px"}} onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
};

const mapDispatchToProps = (dispatch) => ({
    updateInput: (inputValue) => dispatch({
        type: "UPDATE_INPUT",
        inputValue: inputValue,
    }),

    editActive: (bool, id) => dispatch({
        type: "EDIT_ACTIVE",
        activity: bool,
        id,
    }),
    editTask: (id, inputValue) => dispatch({
        type: "EDIT_TASK",
        id: id,
        newName: inputValue,
    }),

    deleteTask: (id) => dispatch({
        type: "DELETE_TASK",
        payload: id,
    }),

    moveUp: (index) => dispatch({
        type: "MOVE_UP_TASK",
        index: index
    }),
    moveDown: (index) => dispatch({
        type: "MOVE_DOWN_TASK",
        index: index
    })
})

export default connect(null, mapDispatchToProps)(TodoItem);