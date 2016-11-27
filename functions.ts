module functions {
	var sqrItSimple = function(h : number, w: number) {
		return h * w;
	}

	var sqrItSimplest = (h: number, w: number) => h *  w;

	var helloWorld: (name?: string) => void;
	helloWorld = (name?: string) => {
		console.log("hello " + (name || 'unknown person'));
	};

	helloWorld();
	helloWorld('suhail'); 

	var squareIt: (rect: {h: number; w?:number;}) => number;

	var rectA = {h: 7};
	var rectB = {h: 7, w: 12};

	squareIt = function(rect) {
		if(rect.w === undefined) {
			return rect.h * rect.h;
		}
		return rect.h * rect.w;
	}

	console.log(squareIt(rectA));
	console.log(squareIt(rectB));


}