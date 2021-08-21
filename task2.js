
//(1)
// function
	var max=0
	for(let i=0;i<5;i++)
	{
		if(arr[i]>max)
			max=arr[i];
	}
	for(let i=0;i<5;i++)
	{
		if(arr[i]===max)
			return i;
	}


var arr=[];
for(let i=0;i<5;i++)
{
	arr.push(Number(prompt("Enter number:")))
}
console.log(getMax(arr));


//(2)
/*
NaN is not a number.
type is any but a number.
variable.value.typeOf() === NaN
*/


//(3)

function add(num1,num2)
{
	var result=num1+num2;
	console.log(`The result is ${result}`);
}
function sub(num1,num2)
{
	var result
	(num1>num2)?result=num1-num2:result=num2-num1
	console.log(`The result is ${result}`);
}
function mult(num1,num2)
{
	var result=num1*num2;
	console.log(`The result is ${result}`);
}
function div(num1,num2)
{
	var result
	(num1>num2)?result=num1/num2:result=num2/num1 
	console.log(`The result is ${result}`);
}


var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var c = prompt("Enter +,-,*,/");
(c === "+")?add(num1,num2):(c==="-")?sub(num1,num2):(c==="*")?mult(num1,num2):(c==="/")?div(num1,num2):console.log("not appropriate  method !!")
