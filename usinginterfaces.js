var usinginterfaces;
(function (usinginterfaces) {
    var Engine1 = (function () {
        function Engine1(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        Engine1.prototype.start = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        Engine1.prototype.stop = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return Engine1;
    }());
    var CustomEngine = (function () {
        function CustomEngine() {
        }
        CustomEngine.prototype.start = function (callback) {
            window.setTimeout(function () {
                callback(true, 'customengine');
            }, 1000);
        };
        CustomEngine.prototype.stop = function (callback) {
            window.setTimeout(function () {
                callback(true, 'customengine');
            }, 1000);
        };
        return CustomEngine;
    }());
    var Auto = (function () {
        function Auto(basePrice, engine, make, model, state, year) {
            this.basePrice = basePrice;
            this.engine = engine;
            this.make = make;
            this.model = model;
            this.state = state;
            this.year = year;
            this.callback = function (status, type) { return console.log(); };
        }
        Auto.prototype.start = function () {
            this.engine.start(this.callback);
        };
        Auto.prototype.stop = function () {
            this.engine.stop(this.callback);
        };
        return Auto;
    }());
    var auto = new Auto(40000, new CustomEngine(), 'Toyota', 'Camry', 'QC', 2010);
    auto.start();
})(usinginterfaces || (usinginterfaces = {}));
