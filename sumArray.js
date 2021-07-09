var array = [1,2,3,4,5];
var sumArray = function (numArray){
	let sum=0;
	for(let i=0;i<numArray.length;i++){
		sum+=numArray[i];
	}
	return sum
}
console.log(sumArray(array))