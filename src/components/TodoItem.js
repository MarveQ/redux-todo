import React from 'react';
import {connect} from "react-redux";

const TodoItem = ({task, deleteTask, index, moveUp, moveDown}) => {
    return <li style={{display: "flex"}}>
        <button style={{margin: "5px"}} onClick={() => moveUp(index)}>&uarr;</button>
        <button  style={{margin: "5px"}} onClick={() => moveDown(index)}>&darr;</button>
        <p style={{marginRight: "0px"}}>{task.name}</p>
        <button style={{margin: "10px"}} onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({
        type: "DELETE_TASK",
        payload: id,
    }),
    moveUp: (index) => dispatch({
        type: "MOVEUP_TASK",
        index: index
    }),
    moveDown: (index) => dispatch({
        type: "MOVEDOWN_TASK",
        index: index
    })
})

export default connect(null, mapDispatchToProps)(TodoItem);