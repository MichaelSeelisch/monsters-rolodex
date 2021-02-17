import { Child, ChildAsFC } from './Child';

const Parent = () => {
	return <Child color='red' onClick={() => console.log('Clicked')}>
		Children prop text
	</Child>
};

const ParentFC = () => {
	return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
		Children prop text
	</ChildAsFC>
};

export { Parent, ParentFC };