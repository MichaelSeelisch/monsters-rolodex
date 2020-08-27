class Vehicle {
	constructor(public color: string) {
		this.color = color;
	}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
/*
	class Car extends Vehicle {
		private drive(): void {
			console.log('vroom');
		}

		startDrivingProcess() {
			this.drive();
			this.honk();
		}
	}

	const car = new Car();
	car.startDrivingProcess();
*/
