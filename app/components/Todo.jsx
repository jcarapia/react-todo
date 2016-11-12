var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function(){

		var {id, text, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';

		if(completedAt === null){
			formattedDate = moment.unix(createdAt).format('MMMM D, YYYY @ h:mm a');
			var timeString = 'Created at: ' + formattedDate;
		} else {
			var formattedDate = moment.unix(completedAt).format('MMMM D, YYYY @ h:mm a');
			var timeString = 'Completed at: ' + formattedDate;
		};

		return (
			<div className={todoClassName} onClick={ () => { this.props.onToggle(id)} }>
				<div>	
					<input type="checkbox" checked={completed} />
				</div>	
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{timeString}</p>
				</div>
			</div>
		)
	}
});

module.exports = Todo;