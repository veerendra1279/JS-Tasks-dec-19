var array = [1,2,3,4,5,6,7,8];
var primeNumbers = function (numArray){
	let result=[];
	for(let i=0;i<numArray.length;i++){
		let count =0;
		for(let j=2;j<numArray[i];j++){
			if(numArray[i]%j===0){
				count+=1;
				break;
			}
		}
		if(count==0)
		{
			if(numArray[i]!==1)
				result.push(numArray[i]);
			
		}
	}
	return result
}
console.log(primeNumbers(array))