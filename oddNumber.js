var array = [1,2,3,4,5];
var printOddNumbers = function (numArray){
	for(let i=0;i<numArray.length;i++){
		if(numArray[i]%2!==0)
			console.log(numArray[i])
	}
}
printOddNumbers(array);