let num=prompt("Enter a number to compute factorial",5);
function factorial(num){	
	let result=1;
	for (let i=num;i>0;i--){
		result=result*i;
		}
	return result;
}
console.log("the result is",factorial(num));