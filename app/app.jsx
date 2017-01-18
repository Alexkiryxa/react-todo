let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');// Let childrens component to use the store
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
