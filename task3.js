//Q3
//(1)
console.log(typeof typeof 1); //string 
//Ex:-
var num =1 , type;
console.log(typeof num);
type=typeof num;
console.log(typeof type);
//(2)
/*NaN is Not a Number and the type of it is still number, but its 
value cannot be expressed by numbers */
console.log(typeof NaN);
//to test if a value is a NaN or not we can use this property to find out
var x =2*"abc",z =2;
console.log(isNaN(x));
console.log(isNaN(z));
//(3)
/*
the evet loop dose retrieve the webAPIs comands like(SettimeOut,input,....)
 from callback queue to be performed at the browser interpreter
 */
 //(4)

 /*---------------------------------------------------------------------------*/

 //Q4
 //(1)
 function sumObjectValues(info){
 	var sum=0;
 	for (let property in info){
 		if(typeof info[property] === 'number' && info.hasOwnProperty(property))
 			sum+=info[property];
 	}
 	return sum;
 }

 var info={
 	Name:"Hassan",
 	age: 23,
 	University: "FUE",
 	Number: 25
 };
 console.log(sumObjectValues(info));
 console.log("--------------------------------");

 //(2)
 for(let i=1;i<=3;i++){
 	setTimeout(function(){ console.log(`${i} after ${i} sec`); }, i*1000);
 }
 setTimeout(function(){ console.log("--------------------------------"); }, 3*1000);

 //(3)
 function convertTime(Time,dayTime){
 	var part,newtime
 	if(dayTime==="Pm" || dayTime==="pm" && Number(Time.slice(0,2))!==12){
 		 part=Number(Time.slice(0,2));
 		 newtime=part+12;
 		 return `The time now is ${""+newtime+Time.slice(2,5)} ${dayTime}`
 	}
 	else if (dayTime==="Am" || dayTime==="am" && Number(Time.slice(0,2))===12){
 		return `The new time now is 00:${Time.slice(3,5)} ${dayTime}`
 	}
 	else
	return `The new time now is ${Time} ${dayTime}`;
 }
 var Time=prompt("Enter the time in form 00:00 :"),dayTime=prompt("Enter the Pm or Am:") ;
console.log(convertTime(Time,dayTime));
console.log("--------------------------------");
 //(4)
 function defDays(date1,date2){
 	let d1=new Date(date1),
 	d2=new Date(date2),
 	timeDiff=Math.abs(d1.getTime()-d2.getTime()),
 	diffDays= Math.ceil(timeDiff/(1000*60*60*24));
 	return `${diffDays} days`;

 }

var date1=prompt("Enter the first date in mm/dd/yyyy:"),
date2=prompt("Enter the second date in mm/dd/yyyy:");
console.log(defDays(date1,date2));
console.log("--------------------------------");

 //(5)
 function maxNumber(arr){
 	var max;
 	for (let index in arr){
 		max=arr.reduce((a,b)=>a>b? a:b)
 	}
 	return `the max number is ${max}`;
 }
var arr=[10,50,-20,100,-40];
console.log(maxNumber(arr));