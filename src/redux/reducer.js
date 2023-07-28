const initialStore = {
    appName: "Todo list",
    inputValue: '',
    editIsActive: false,
    editId: 0,
    todo: [
        {
            id: 1,
            name: "Learn Redux",
        },
        {
            id: 2,
            name: "Learn React",
        },
        {
            id: 3,
            name: "Do",
        },
        {
            id: 4,
            name: "To Do",
        }
    ]
}

const reducer = (state = initialStore, action) => {
    const todoList = [...state.todo];
    const swap = (index1, index2) => {
        [todoList[index1], todoList[index2]] = [todoList[index2], todoList[index1]]
    }

    switch (action.type) {
        case 'UPDATE_INPUT':
            return {...state, inputValue: action.inputValue}


        case 'CREATE_TASK':
            if (action.newTask.name !== '') {
                return {...state, todo: [...todoList, action.newTask]};
            }
            return state

        case 'EDIT_ACTIVE':
            return {...state, editIsActive: action.activity, editId: action.id}
        case 'UPDATE_TASK':
            console.log(action.inputValue)
            return {...state, todo: state.todo.map(task => task.id === state.editId ? {...task, name: action.inputValue} : task)}

        case 'DELETE_TASK':
            return {...state, todo: state.todo.filter(task => task.id !== action.payload)};


        case 'MOVE_UP_TASK':
            if (action.index > 0) {
                swap(action.index, action.index - 1);
                return {...state, todo: todoList};
            }
            return state;
        case 'MOVE_DOWN_TASK':
            if (action.index < todoList.length - 1) {
                swap(action.index, action.index + 1);
                return {...state, todo: todoList};
            }
            return state;

        default:
            return state
    }
}

export {reducer}