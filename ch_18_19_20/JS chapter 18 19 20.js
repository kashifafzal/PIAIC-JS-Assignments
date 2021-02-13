console.log("Assignment JS chapter 15 16 17")

courses=[]
for (var i=0;i<5;i++)
{ 
   course1 = prompt("course"+(i+1), "type course here");
    courses.push(course1)
}

alert(courses)

for (var i=0;i<5;i++)
{
	course1=prompt("course"+(i+1), courses[i]);
	courses.splice(i,1,course1);
}

alert("updated courses:"+courses)