var primitives;
(function (primitives) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isCool = function () { return 'yes'; };
    var cool = !!isCool();
    var firstName = "suhail";
    var lastName = "kandanur";
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['suhail', 'kandanur', 'chunnu', 'honey'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company = undefined;
    console.log(quantity);
    console.log(company);
})(primitives || (primitives = {}));
