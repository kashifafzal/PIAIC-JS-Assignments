let obtained=0 , total=500;
for (let i=0; i<5;i++)
{
    obtained=obtained+Number( prompt("Enter marks out of 100 for subject "+(i+1) , 0) );
}
let percent_obtained= (obtained/total)*100;
alert(percent_obtained+"%")