import './App.css';
import {connect} from "react-redux";
import TodoItem from "./components/TodoItem";
import {useState} from "react";

function App({appName, todo, createNewTask}) {
    const [inputValue, setInputValue] = useState();

    return (
        <div>
            <h1>{appName}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={() => createNewTask(inputValue)}>Create</button>
            {todo.map((task, index) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    index={index}
                />
            ))}

        </div>
    );
}

const mapStateToProps = (state) => ({
    appName: state.appName,
    todo: state.todo
})
const mapDispatchToProps = (dispatch) => ({
  createNewTask: (inputValue) => dispatch({
    type: 'CREATE_TASK',
    newTask: {
      id: Math.random(),
      name: inputValue
    }
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
