// Using an ES6 transpiler, like babel 
import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';


const addCounter = (list) => {
	
	/* Returns error 'cause of freezed array:
	/* list.push(0);
	/* return list;
	*/

	// list.concat([0]) or ES6:
	return [...list, 0];
};

const removeCounter = (list, index) => {
	/* Returns error 'cause of freezed array:
	/* list.splice(index, 1);
	/* return list;
	*/

	/*
	return list
		.slice(0, index)
		.concat(list.slice(index + 1));
	/* or ES6:
	*/
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];
};

const incrementCounter = (list, index) => {
	/*
	return list
		.slice(0, index)
		.concat([list[index] + 1));
	/* or ES6:
	*/
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
	];
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];

	// Freeze listBefore Array
	deepFreeze(listBefore);

	expect(
		addCounter(listBefore)
	).toEqual(listAfter);
};

const testRemoveCounter = () => {
	const listBefore = [0, 10, 20];
	const listAfter = [0, 20];

	// Freeze listBefore Array
	deepFreeze(listBefore);

	expect(
		removeCounter(listBefore, 1)
	).toEqual(listAfter);
};

const testIncrementCounter = () => {
	const listBefore = [0, 10, 20];
	const listAfter = [0, 11, 20];

	deepFreeze(listBefore);

	expect(
		incrementCounter(listBefore, 1)
	).toEqual(listAfter);
};

testAddCounter();
console.log('All test passed.');