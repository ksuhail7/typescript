module usinginterfaces {
interface Engine {
	start(callback: (startStatus:boolean, engineType: string) => void) : void;
	stop(callback: (startStatus: boolean, engineType: string) => void) : void;
}

class Engine1 implements Engine {
	constructor(public horsePower: number, public engineType: string) {

	}
	start(callback) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}
}

class CustomEngine implements Engine {
	start(callback) {
window.setTimeout(() => {
			callback(true, 'customengine');
		}, 1000);
	}
	stop(callback) {
window.setTimeout(() => {
			callback(true, 'customengine');
		}, 1000);
	}
}

class Auto {
	constructor(public basePrice: number, public engine: Engine, public make: string, public model: string, public state: string, public year: number) {

	}

	callback = (status, type) => console.log();

	start() {
		this.engine.start(this.callback);
	}

	stop() {
		this.engine.stop(this.callback);
	}
}
window.onload(function() {
var auto = new Auto(40000, new CustomEngine(), 'Toyota', 'Camry', 'QC', 2010);
auto.start();
});
}