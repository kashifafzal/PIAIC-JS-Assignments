var inputValue=prompt("Enter a mixed upper lower cased string","cloUd naTive computinG")
function camelcase(inputValue){
	inputValue=inputValue.toLowerCase();
	let result=inputValue[0].toUpperCase();
	for (let i=1;i<inputValue.length;i++){
		result=result+inputValue[i]
		if(inputValue[i]===" "){
			result=result+inputValue[i+1].toUpperCase()
			i++;
		}
	}
			
    console.log(result);
	return result;
}
inputValue=camelcase(inputValue);
console.log(inputValue);