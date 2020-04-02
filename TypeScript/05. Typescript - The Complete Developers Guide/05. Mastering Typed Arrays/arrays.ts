const carMakers: string[] = ['ford', 'toyota', 'chevi'];

const dates: Date[] = [new Date(), new Date(), new Date()];

const carsByMake: string[][] = [
	['f150'],
	['corolla'],
	['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-10-10'];
importantDates.push('2020-11-11');
importantDates.push(new Date());
importantDates.push(100);