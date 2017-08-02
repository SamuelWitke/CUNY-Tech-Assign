/*
	Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
*/
function deepEqual(obj1,obj2) {
	if(typeof obj1 != "object" && obj1 != null) {
		return obj1 == obj2;
	}
	for(var property in obj1) {
		 if (!obj2.hasOwnProperty(property)) {
			return false;
		 }
		 var ans = deepEqual(obj1[property],obj2[property]);
		 if(ans == false) return false;
	}	
	return ans;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

