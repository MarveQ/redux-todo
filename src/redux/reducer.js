const initialStore = {
    appName: "Todo list",
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
        case 'DELETE_TASK':
            return {...state, todo: state.todo.filter(e => e.id !== action.payload)};
        case 'CREATE_TASK':
            return {...state, todo: [...todoList, action.newTask]};
        case 'MOVEUP_TASK':
            if (action.index > 0) {
                swap(action.index, action.index - 1);
                return {...state, todo: todoList};
            }
            return state;
        case 'MOVEDOWN_TASK':
            if (action.index < todoList.length-1) {
                swap(action.index, action.index + 1);
                return {...state, todo: todoList};
            }
            return state;

        default:
            return state
    }
}

export {reducer}