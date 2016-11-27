module objects {
	var points1 = { x: 10, y: 20};
	var x = points1.x;

	var points2: {};
	points2 = {x:10, y: 20};

	var points3: Object = {x: 1};

	var rect = {
		h: 10,
		w: 20,
		calcArea: function() {
			return this.h * this.w;
		}
	};
	console.log('rect area: ' + rect.calcArea());

	var squareIt1 = function(x) {
		return x * x;
	};

	console.log("square of '2' = " + squareIt1('2'));
	console.log("square of 'suhail' = " + squareIt1('suhail'));

	var squareIt = function(rect: { h: number; w?:number;}) {
		 if(rect.w === undefined) {
		 	return rect.h * rect.h;
		 } 
		 return rect.h * rect.w;
	}

	console.log('rectange h and w of 10 = ' + squareIt({h: 10}));
	console.log('rectange of h and w of 10 and 40 = ' + squareIt({h: 10, w:40}));
}