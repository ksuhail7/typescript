module primitives {
	var data: any;
	var info;
	var doSomething = function(arg) { 
		return arg;
	}

	var x = doSomething(5);

	var age: number = 21;
	var score: number = 34.56;
	var rating= 99.99;

	var hasData: boolean = true;
	var isReady = true;
	var isCool = function() { return 'yes';}
	var cool = !!isCool();

	var firstName: string = "suhail";
	var lastName = "kandanur";

	function getArrayLength(x: string[]) {
		var len: number = x.length;
		return len;
	}

	var names: string[] = ['suhail', 'kandanur', 'chunnu', 'honey'];
	var firstPerson: string = names[0];
	console.log(getArrayLength(names));

//null
	var guitarSales: any = null;
	var animal = null;
	var orderDate: Date = null;

	//undefined
	var quantity: number;
	var company = undefined;

	console.log(quantity);
	console.log(company);
}