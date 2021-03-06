import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export let setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export let addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export let startAddTodo = (text) => {
    return (dispatch, getState) => {// dispatch and getState are passed by redux. thunk allow us to write actions that return functions
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        let todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export let addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export let startAddTodos = () => {
    return (dispatch, getState) => {
        let todosRef = firebaseRef.child('todos');

        return todosRef.once('value').then((snapshot) => {
            let objectTodos = snapshot.val() || {};
            let keys = Object.keys(objectTodos);
            let keysLength = keys.length;
            let todos = [];

            for ( let i = 0; i < keysLength; i++ ) {
                let id = keys[i];

                todos.push({
                    id: keys[i],
                    ...objectTodos[id]
                });
            }

            dispatch(addTodos(todos));
        });
    };
};

export let updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export let startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        let todoRef = firebaseRef.child(`todos/${id}`);
        let updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};
