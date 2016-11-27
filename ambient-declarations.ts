/// <reference path="typings/knockout.d.ts"/>

declare var ko: KnockoutStatic;

module ambientdeclarations {
	var name = ko.observable('suhail kandanur');
	var id = ko.observable(1);
	var guy = {
		fullName: name,
		id: id
	};

	var value = guy.fullName();
	console.log(value);
}