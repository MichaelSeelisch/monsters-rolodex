import { useState } from 'react';

const users = [
	{ name: 'Sarah', age: 20 },
	{ name: 'Alex', age: 20 },
	{ name: 'Michael', age: 20 }
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');

	const onClick = () => {

	};

	return <div>
		User Search

		<input value={name} onChange={event => setName(event.target.value)} />
		<button type='button' onClick={onClick}>Find User</button>
	</div>
};

export default UserSearch;