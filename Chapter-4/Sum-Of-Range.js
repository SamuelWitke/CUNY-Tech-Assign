/*
 Write a range function that takes two arguments, start and end, 
 and returns an array containing all the numbers from start up to (and including) end.
*/
function range(start,end) {
	var arr = [];
	for(var i=start;i<=end;i++) {
		arr.push(i);
	}
	return arr;
}

console.log(range(1,10));
