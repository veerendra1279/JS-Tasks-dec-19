var array = [1,2,3,4,5,1,2];
var removeDuplicates = function (numArray){
	let res=[];
	for(let i=0;i<numArray.length;i++){
		let flag=0;
		for(let j=0;j<res.length;j++){
			if(res[j]==numArray[i]){
				flag=1;
				break;
			}
		}
		if(flag==0)
			res.push(numArray[i])
	}
	return res;
}
console.log(removeDuplicates(array))