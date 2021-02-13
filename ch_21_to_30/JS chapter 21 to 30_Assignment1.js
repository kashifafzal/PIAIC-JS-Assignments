let myStr="This is my dummy text";
let num=prompt("Enter a float value max till "+(myStr.length-1),3.4);
num=Math.ceil(num);
let mySlice=myStr.slice(0,num);
let result="";
for (let i=mySlice.length-1;i>=0; i--)
{
	result=result+mySlice[i]
}
alert(result);
