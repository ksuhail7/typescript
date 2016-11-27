var classes;
(function (classes) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        return Engine;
    }());
    var Car = (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () { return this._engine; },
            set: function (engine) {
                this._engine = engine;
            },
            enumerable: true,
            configurable: true
        });
        return Car;
    }());
    var engine = new Engine(2000, "v8");
    var car = new Car(engine);
    console.log(car.engine);
})(classes || (classes = {}));
