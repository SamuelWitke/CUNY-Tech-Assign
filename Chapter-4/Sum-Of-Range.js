/*
 Write a range function that takes two arguments, start and end, 
 and returns an array containing all the numbers from start up to (and including) end.
*/
function range(start,end,step=1) {
	var arr = [];
	if(step > 0){
		for(var s=start;s <= end; s+=step){
			arr.push(s);
		}
	}else{
		for(var s=start;s >= end; s+=step){
			arr.push(s);
		}
	}
	return arr;
}
function sum(arr) {
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum += arr[i];	
	}
	/*
	Or use array.reduce for faster iteration
	sum = arr.reduce((pv,cv) => pv + cv,0);
	*/
	return sum;
}
console.log(range(1,10));
console.log(range(5,2,-1));
console.log(range(1,10,2));
console.log(sum(range(1,10)));

