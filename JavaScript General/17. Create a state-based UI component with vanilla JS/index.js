var Rue = function (options) {
	this.elem = document.querySelector(options.selector);
	this.data = options.data;
	this.template = options.template;
};

Rue.prototype.render = function () {
	this.elem.innerHTML = this.template(this.data);
};

var app = new Rue({
	selector: '#app',
	data: {
		heading: 'My Todos',
		todos: ['Swim', 'Climb', 'Jump', 'Play']
	},
	template: function (props) {
		return `
			<h1>${props.heading}</h1>
			<ul>
				${props.todos.map(function (todo) {
					return `<li>${todo}</li>`;
				}).join('')}
			</ul>`;
	}
});

// Add a new item to the data
app.data.todos.push('Take a nap... zzzzz');

// Render an updated UI
app.render();