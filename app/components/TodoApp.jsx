var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'clean the yard',
					completed: true
				},
				{
					id: uuid(),
					text: 'do laundry',
					completed: true
				},
				{
					id: uuid(),
					text: 'wash the car',
					completed: false
				}
			]
		}
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	handleToggle: function(id){
		
		var updatedTodos = this.state.todos.map((todo) => {

			if(todo.id === id){
				todo.completed = !todo.completed;
			};

			return todo;
		});

		this.setState({todos: updatedTodos})

	},
	handleAddTodo: function(text){
		alert('new todo: ' + text);
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		})
	},
	render: function(){

		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;