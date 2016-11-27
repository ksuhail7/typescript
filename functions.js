var functions;
(function (functions) {
    var sqrItSimple = function (h, w) {
        return h * w;
    };
    var sqrItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log("hello " + (name || 'unknown person'));
    };
    helloWorld();
    helloWorld('suhail');
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(functions || (functions = {}));
