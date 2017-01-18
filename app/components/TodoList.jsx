let React = require('react');
let {connect} = require('react-redux');// connect provides access to the store for a children, but children needs to specify what data they need

import Todo from 'Todo';
let TodoAPI = require('TodoAPI');

export let TodoList = React.createClass({
    render: function() {
        let {todos, showCompleted, searchText} = this.props;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        let renderTodos = () => {
            if ( filteredTodos.length === 0 ) {
                return (<p className="container__message">Nothing to do</p>);
            }

            return filteredTodos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return state;
        // return {
        //     todos: state.todos// This will add todos to this.props
        // };
    }
)(TodoList);
