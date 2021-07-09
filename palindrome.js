var array = ["abcba","abc","aa","aabb","guvi"]
var palindrome = function(arr){
	let result = [];
	for(let i=0;i<arr.length;i++){
		
		let str = arr[i]
		let flag=0;
		for(let j=0,k=str.length-1;j<=k;j++,k--){
			if(str[j]!==str[k]){
				flag=1;
				break;
			}
		}
		if(flag!=1)
			result.push(str);
	}
	return result;	
}
console.log(palindrome(array))