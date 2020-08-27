const config = plop => {
	plop.setGenerator('component', {
		description: 'Generate a new web component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?'
			},
			{
				type: 'input',
				name: 'folder',
				message: 'Where to put the component into?'
			},
			{
				type: 'input',
				name: 'lifecycles',
				message: 'Lifecycle methods desired?'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
				templateFile: 'templates/component.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.less'
			}
		]
	})
}

module.exports = config;