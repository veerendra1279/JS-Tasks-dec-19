var str = "guvi learning platform";

const convertStringToTitleCase = function (str) {
	str = str.split(" ");
	for(let i=0;i<str.length;i++){
		str[i] = str[i].toUpperCase();
	}
	str = str.join(' ');
	return str;
}
console.log(convertStringToTitleCase(str));