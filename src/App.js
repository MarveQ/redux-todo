import {connect} from "react-redux";
import TodoItem from "./components/TodoItem";

function App({appName, todo, inputValue, updateInput, createNewTask, editIsActive, editActive, updateTask}) {
    return (
        <div>
            <h1>{appName}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={e => updateInput(e.target.value)}
            />
            {
                editIsActive ?
                    (
                        <div>
                            <button onClick={() => {
                                updateTask(inputValue)
                                updateInput('');
                            }}
                            >Submit
                            </button>
                            <button onClick={() => {
                                updateInput('')
                                editActive(false)
                            }}
                            >
                                Cancel
                            </button>
                        </div>
                    ) :
                    (
                        <button onClick={() => createNewTask(inputValue)}>Create</button>
                    )
            }
            {todo.map((task, index) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    index={index}
                    inputValue={inputValue}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    appName: state.appName,
    inputValue: state.inputValue,
    editIsActive: state.editIsActive,
    todo: state.todo
})
const mapDispatchToProps = (dispatch) => ({
    updateInput: (inputValue) => dispatch({
        type: 'UPDATE_INPUT',
        inputValue: inputValue
    }),

    editActive: (bool) => dispatch({
        type: 'EDIT_ACTIVE',
        activity: bool,
    }),
    updateTask: (inputValue) => dispatch({
        type: 'UPDATE_TASK',
        inputValue: inputValue
    }),

    createNewTask: (inputValue) => dispatch({
        type: 'CREATE_TASK',
        newTask: {
            id: Math.random(),
            name: inputValue
        }
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
