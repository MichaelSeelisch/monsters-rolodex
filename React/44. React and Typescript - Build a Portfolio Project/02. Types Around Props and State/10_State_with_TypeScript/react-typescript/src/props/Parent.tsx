import { ChildAsFC } from './Child';

const Parent = () => {
	return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
		Children prop text
	</ChildAsFC>
};

export default Parent;