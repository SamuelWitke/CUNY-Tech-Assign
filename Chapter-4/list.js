/*
Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list
*/
function arrayToList(arr) {
	for(var i=arr.length;i--;) {
		var list = {value: arr[i],rest: list}
	}
	return list;
}

function listToArray(list){
	var arr = [];
	for (var node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
}

// Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(elmt,list) {
	list = {value: elmt, rest: list}
	return list;
}

// nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
function nth(list,n) {
	var node = list;
	for(var i=0;i<n;i++) {
		node = node.rest;
	}
	if(node != undefined)
		return node.value;
	else
		return undefined;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

