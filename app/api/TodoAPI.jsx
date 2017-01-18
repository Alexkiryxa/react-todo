let $ = require('jquery');

module.exports = {
    filterTodos: function(todos, showCompleted, searchText) {
        let filteredTodos = todos;

        //Filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        //Filter by search text
        if ( searchText.length > 0 ) {
            filteredTodos = filteredTodos.filter((todo) => {
                return todo.text.toLowerCase().indexOf(searchText) > -1;
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
