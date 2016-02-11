import React from 'react';
import Contact from './Contact';

var people = [
	{
		'name': 'Scott',
		'email': 'scott@leveluptuts.com',
		'img': 'http://lorempixel.com/80/80/cats/1',
		'phone': '545 545 5545'
	}, {
		'name': 'Ben',
		'email': 'ben@leveluptuts.com',
		'img': 'http://lorempixel.com/80/80/cats/2',
		'phone': '545 545 1232'
	}, {
		'name': 'Jeff',
		'email': 'jeff@leveluptuts.com',
		'img': 'http://lorempixel.com/80/80/cats/3',
		'phone': '545 545 8964'
	}, {
		'name': 'Bobby',
		'email': 'bobby@leveluptuts.com',
		'img': 'http://lorempixel.com/80/80/cats/4',
		'phone': '545 545 1789'
	}
];

export default React.createClass({
	render() {
		return (
			<section>
				<h2>Contact List</h2>
				{
					people.map(function(person, i) {
						return(<Contact person={person} key={i} />)
					})
				}				
			</section>
		)
	}
});