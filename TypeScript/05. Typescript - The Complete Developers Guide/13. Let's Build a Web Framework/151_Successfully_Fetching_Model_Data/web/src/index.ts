import { User } from './models/User';

const user = new User({
	id: 1,
	name:  'myname',
	age: 20
});

user.fetch();