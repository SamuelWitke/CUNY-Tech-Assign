/*
 * Using the example data set from this chapter, 
 * compute the average age difference between mothers and children
 */

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}
var ancestry =
[
	{"name": "Emma de Milliano", "sex": "f",
	 "born": 1876, "died": 1956,
	 "father": "Petrus de Milliano",
	 "mother": "Carolus Haverbeke"},

	{"name": "Carolus Haverbeke", "sex": "m",
	 "born": 1832, "died": 1905,
	 "father": "Carel Haverbeke",
	 "mother": "Maria van Brussel"},
]
var byName = {};
ancestry.forEach(function(person) {
  		byName[person.name] = person;
});
function hasMotherKnown(p){ 
	return (typeof byName[p.mother] != "undefined") 
}
function age(p){
		var mother = byName[p.mother];
		var motherAge = mother.died - mother.born;
		return (p.died - p.born) - motherAge;
}
console.log(average(ancestry.filter(hasMotherKnown).map(age)));

