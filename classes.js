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
            set: function (value) {
                if (value === undefined)
                    throw "please supply an engine";
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        Car.prototype.start = function () {
            alert('Car engine started ' + this._engine.engineType);
        };
        return Car;
    }());
    var engine = new Engine(2000, "v8");
    var car = new Car(engine);
    console.log(car.engine);
    window.onload = function () {
        var engine = new Engine(300, 'v8');
        var car = new Car(engine);
        alert(car.engine.engineType);
        car.start();
    };
})(classes || (classes = {}));
