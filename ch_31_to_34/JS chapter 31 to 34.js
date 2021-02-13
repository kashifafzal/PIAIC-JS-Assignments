let name=prompt("enter name","Kashif Afzal");
let DOB_dt=prompt("enter DOB date:",02);
let DOB_mm=prompt("enter DOB month 01-12:",02);
let DOB_yr=prompt("enter DOB year",1986);

console.log("Hello",name,"Good Morning!");

let now=new Date()

let dob=new Date()
dob.setDate(parseInt(DOB_dt));
dob.setMonth(parseInt(DOB_mm)-1);
dob.setFullYear(parseInt(DOB_yr));
dob.setHours(0);
dob.setMinutes(0);
dob.setSeconds(0);
dob.setMilliseconds(0);

console.log("your dob is",dob);
function computeDateDiff(higherDt, lowerDt){
	
	let diff_ms=higherDt-lowerDt;
	let total_yrs=diff_ms/(1000*60*60*24*365);
	let abs_yrs= Math.floor( total_yrs );

	let total_mths= (total_yrs-abs_yrs)*12 ;
	let abs_months=Math.floor(total_mths);

	let total_days=(total_mths-abs_months)*30 ;
	let abs_days=Math.floor(total_days);

	let total_hrs=(total_days-abs_days)*24;
	let abs_hrs=Math.floor(total_hrs)

	let total_mins=(total_hrs-abs_hrs)*60;
	let abs_mins=Math.floor(total_mins);

	let total_sec= (total_mins-abs_mins)*60;
	let abs_sec= Math.round(total_sec);
	
	let total_age_as_days=Math.floor( diff_ms/(1000*60*60*24));
	
	return [abs_yrs,abs_months,abs_days,abs_hrs,abs_mins,abs_sec, total_age_as_days]
}
let yrs,months,days,hrs,mins,sec, total_age_as_days=[0,0,0,0,0,0,0];
[yrs,months,days,hrs,mins,sec, total_age_as_days]=computeDateDiff(now,dob)
console.log("You are "+yrs+" years "+months+" Month "+days+" Days "+hrs+" Hours "+mins+" Minutes "+sec+" Seconds old")

function computeNextBdayDiff(dob,now){
	let next_bdate=dob.setFullYear(now.getFullYear()+1);
	let diff_ms=next_bdate-now;	
	
	let total_days=diff_ms/(1000*60*60*24);
	let abs_days=Math.floor(total_days);

	let total_hrs=(total_days-abs_days)*24;
	let abs_hrs=Math.floor(total_hrs)

	let total_mins=(total_hrs-abs_hrs)*60;
	let abs_mins=Math.floor(total_mins);

	let total_sec= (total_mins-abs_mins)*60;
	let abs_sec= Math.round(total_sec);
	
	return [abs_days,abs_hrs,abs_mins,abs_sec]
}

[days,hrs,mins,sec]=computeNextBdayDiff(dob,now);
console.log("How much time left in your next birthday? "+days+" Days "+hrs+" Hours "+mins+" Minutes "+sec+" Seconds")