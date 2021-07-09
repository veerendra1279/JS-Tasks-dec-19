var array = [1,2,3,4,5];
var rotateArray = function (numArray,k){
	let resArray = new Array(numArray.length);
	for(let i=0;i<numArray.length;i++){
		if(i+k+1<=numArray.length)
			resArray[i+k]=numArray[i];
		else{
			let temp = (i+k)%numArray.length;
			resArray[temp]=numArray[i];
		}
	}
	return resArray;
}
console.log(rotateArray(array,6))