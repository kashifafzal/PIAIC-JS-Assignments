let courses=[]
for (let i=1;i<6;i++){	
	let temp=prompt("Enter name of course"+i,"Course"+i);
	courses.push(temp);
}

alert(courses)
for (let i=0;i<courses.length;i++){
	let temp= prompt("Course"+(i+1)+"= ", courses[i]);
	courses.splice(i,1,temp)
}
alert(courses)