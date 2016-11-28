class Auto {
	engine: Engine;
	constructor(engine: Engine) {
		this.engine = engine;
	}
}

class Engine {
	constructor(public horsePower: number, public engineType: string) {
		
	}
}

class Truck extends Auto {
	constructor(public basePrice: number, engine: Engine) {
		super(engine);
	}
}