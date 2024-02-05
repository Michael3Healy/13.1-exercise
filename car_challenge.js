class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep.';
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM!!!';
	}
}

class Garage {
    constructor(capacity, vehicles=[]) {
        this.capacity = capacity;
        this.vehicles = vehicles;
    }
    isFull() {
        return this.vehicles.length >= this.capacity;
    }
    isVehicle(obj) {
        return obj instanceof Vehicle;
    }
    add(vehicle) {
        if (!this.isFull() && this.isVehicle(vehicle)) {
            this.vehicles.push(vehicle);
            return 'Vehicle added!';
        } else if (this.isFull()) {
            return 'Sorry, we’re full.';
        } else {
            return 'Only vehicles are allowed in here!';
        }
    }
}
