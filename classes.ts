module classes {
	class Engine {
		constructor(public horsePower: number, public engineType: string) {}
	}
	class Car {
		private _engine: Engine;
		constructor(engine: Engine) {
			this.engine = engine;
		}

		get engine() { return this._engine; }

		set engine(value: Engine) {
			if(value === undefined) throw "please supply an engine";
			this._engine = value;
		}

		start() {
			alert('Car engine started ' + this._engine.engineType)
		}
	}

	var engine = new Engine(2000, "v8");
	var car = new Car(engine);
	console.log(car.engine);
} 