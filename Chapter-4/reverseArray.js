/*
 Arrays have a method reverse, 
 which changes the array by inverting the order in which its elements appear.
 For this exercise, write two functions, reverseArray and reverseArrayInPlace
*/
function reverseArray(a) {
	var newArray = [];
	for(var i=a.length -1 ; i>= 0;i--){
		newArray.push(a[i]);
	}
	return newArray;
}
function reverseArrayInPlace(a) {
	var len = a.length;
	for(var i=0;i<Math.floor(len / 2);i++) {
		var tmp = a[i];
		a[i] = a[len-i-1];
		a[len-i-1] = tmp;
	}
	return a;
}
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
