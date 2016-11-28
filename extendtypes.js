var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Auto = (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine) {
        _super.call(this, engine);
        this.basePrice = basePrice;
    }
    return Truck;
}(Auto));
