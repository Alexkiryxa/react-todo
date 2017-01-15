let React = require('react');

let AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        let text = this.refs.todoText.value;

        if ( text.length > 0 ) {
            this.props.onAddTodo(text);
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Enter new Todo"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
