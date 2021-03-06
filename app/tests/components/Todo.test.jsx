var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
	
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id on click', () => {
		
		var todoData = {
			id: 13, 
			text: 'sample text',
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

		var $el = $(ReactDOM.findDOMNode(todo));
		//simulate a click on the 0th element, in this case the div with the onClick
		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(todoData.id);


	});




})