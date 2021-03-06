let React = require('react');
let {connect} = require('react-redux');
let moment = require('moment');
let actions = require('actions');

export let Todo = React.createClass({// Exporting for writing tests
    render: function() {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props;// dispatch is added because of we use connect on this component
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if ( completed ) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY HH:mm');
        };

        return (
            <div className={todoClassName} onClick={() => {
                    dispatch(actions.startToggleTodo(id, !completed));
                }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
