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


}