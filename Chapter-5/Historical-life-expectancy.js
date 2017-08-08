"use strict";
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}
var ancestry = 
[
	{"name": "Emma de Milliano", "sex": "f",
	 "born": 1876, "died": 1956,
	 "father": "Petrus de Milliano",
	 "mother": "Sophia van Damme"},

	{"name": "Bob de Milliano", "sex": "f",
	 "born": 1896, "died": 1956,
	 "father": "Petrus de Milliano",
	 "mother": "Sophia van Damme"},

	{"name": "Carolus Haverbeke", "sex": "m",
	 "born": 1832, "died": 1905,
	 "father": "Carel Haverbeke",
	 "mother": "Maria van Brussel"},
	{"name": "Bob Haverbeke", "sex": "m",
	 "born": 1832, "died": 1834,
	 "father": "Carel Haverbeke",
	 "mother": "Maria van Brussel"},
];
function ageCent(person) {
	return Math.ceil(person.died /100);
}
function getAge(person) {
	return person.died - person.born;
}
function groupBy(data, func1,func2) {
	let ages = {};
	data.map( (person) => {
		let century = func1(person);
		let age = func2(person)
		if(!(century in ages)) {
			ages[century] = [age];
		}else{
			ages[century].push(age);
		}
	});
	return ages;
}
var ages =groupBy(ancestry,ageCent,getAge);
for(let i in ages) {
	console.log(`${i}: ${average(ages[i])}`);
}
