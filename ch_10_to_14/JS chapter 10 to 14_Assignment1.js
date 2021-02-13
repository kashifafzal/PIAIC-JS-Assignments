let va1ue1=prompt("Enter first number",7);
let va1ue2=prompt("Enter second number",3);
let op = prompt("Enter operator out of + - * / %" ,"+")
let result=0.0;
va1ue1=Number(va1ue1);
va1ue2=Number(va1ue2);
switch (op){
	case "+":
	result=va1ue1+va1ue2;
	break;
	case "-":
	result=va1ue1-va1ue2;
	break;
	case "*":
	result=va1ue1*va1ue2;
	break;
	case "/":
	result=va1ue1/va1ue2;
	break;
	case "%":
	result=va1ue1%va1ue2;
	break;
}

alert(""+va1ue1+op+va1ue2+"="+result)