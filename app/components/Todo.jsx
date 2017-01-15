let React = require('react');
let moment = require('moment');

let Todo = React.createClass({
    render: function() {
        let {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;
