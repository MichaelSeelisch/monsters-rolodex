// METHOD 1:
import { sumTwo, sumThree } from 'js/math/addition';

console.log(
	'2 + 3 = ',
	sumTwo(2, 3)
);

console.log(
	'2 + 3 + 4 = ',
	sumThree(2, 3, 4)
);

// METHOD 2:
/*
	import {
		sumTwo as addTwoNumbers,
		sumThree
	} from 'math/addition';

	console.log(
		'2 + 3 = ',
		addTwoNumbers(2, 3)
	);

	console.log(
		'2 + 3 + 4 = ',
		sumThree(2, 3, 4)
	);
*/

// METHOD 3:
/*
	import * as addition from 'math/addition';

	console.log(
		'2 + 3 = ',
		addition.sumTwo(2, 3)
	);

	console.log(
		'2 + 3 + 4 = ',
		addition.sumThree(2, 3, 4)
	);
*/