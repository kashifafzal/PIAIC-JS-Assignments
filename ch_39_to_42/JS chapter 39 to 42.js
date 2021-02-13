 // A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 50% , Grade D 30% to 44% Grade F 0% to 29%
 
let obtained=0 , total=500;
for (let i=0; i<5;i++)
{
    obtained=obtained+Number( prompt("Enter marks out of 100 for subject "+(i+1) , 0) );
}
let percent_obtained= Math.round( (obtained/total)*100 );

switch (true){
	case (percent_obtained>=90 && percent_obtained<=100):
		alert("A+");
		break;
	case (percent_obtained>=75 && percent_obtained<=89):
		alert("A");
		break;
	case (percent_obtained>=60 && percent_obtained<=74):
		alert("B");
		break;
	case (percent_obtained>=45 && percent_obtained<=59):
		alert("C");
		break;
	case (percent_obtained>=30 && percent_obtained<=44):
		alert("D");
		break;
	default:
		alert("F");

}