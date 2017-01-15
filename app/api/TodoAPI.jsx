let $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if ( $.isArray(todos) ) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        let filteredTodos = todos;

        //Filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        //Filter by search text
        if ( searchText.length > 0 ) {
            filteredTodos = filteredTodos.filter((todo) => {
                return !todo.text.toLowerCase().indexOf(searchText);
            });
        }
        //Sort todos with none completed first
        filteredTodos.sort((a, b) => {
            if ( !a.completed && b.completed ) {
                return -1;
            } else if ( a.completed && !b.completed ) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};
