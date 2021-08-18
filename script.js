/*
// (1)
var num = prompt("Enter the number:");
(num % 2 ===0)?
console.log("the number is even")
: console.log("the number is odd");
*/

/*
//(2)
for(let i=1; i<=15 ; i++)
{
	(i%3 ===0 && i%5===0)?
	console.log("fizzbuzz")
	: (i%3 ===0)?
	console.log("fizz")
	:(i%5 ===0)?
	console.log("buzz")
	:console.log(i);
}
*/

//(3) 
/*
var str= prompt("Enter string:");
	for(let i=str.length ; i>=0 ; i--)
	{
		
		console.log(str[i]);
	}
*/

//(4)
/*
function Caria (r,pai)
{
	let a = pai*(r**2);
	console.log(`the aria is ${a}`);
}
function Circumference(r,pai)
{
	let c = 2*pai*r;
	console.log(`the Circumference is ${c}`);
}
var r = prompt("Enter the radius:");
const pai = 3.14;

Caria (r,pai);
Circumference(r,pai);
*/

//(5)
/*
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
(Number(num1) === 50 || Number(num2) === 50)?
console.log("50")
:(Number(num1)+Number(num2)=== 50)?
console.log("50")
:console.log("nothing");
*/

//(6)
/*
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
(num1>0 && num2>0)?console.log("number 1 & 2 are positve")
:(num1<0 && num2<0)?console.log("number 1 & 2 are negative")
:(num1>0 && num2<0)?console.log("number 1 is positve and number 2 is negative")
:console.log("number 1 is negative and number 2 is positve")
*/

//(7)
/*
var num = prompt("Enter the  number:");
(Number(num)%5===0)?console.log("the number is multiple of 5"):(Number(num)%8===0)?console.log("The number is multiple of 8"):console.log("the number is neither multiple of 5 or 8")
*/

//(8)
/*
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var num3 = Number(prompt("Enter the third number:"));
(num1>num2 && num1>num3)?console.log("number 1 is the largest")
:(num2>num1 && num2>num3)?console.log("number 2 is the largest")
:(num3>num1 && num3>num2)?console.log("number 3 is the largest")
:console.log("all of them are equal");
*/

//(9)
/*
var sum=0;
for(let i=1 ;i<= 10 ; i++)
{
	sum+=i;
}
console.log(`The sum is ${sum}`);
*/

//(10)
/*
var str="";
for(let i=0 ; i<5 ;i++)
{
	for(let j=0 ; j<i ;j++)
    {
    	str+='*';
    }
    str+="\n"
}
console.log(str)
*/

//(11)
/*
var num = prompt("Enter the  number:");
(num>0)?console.log("The number is positve"):console.log("The number is negative");
*/

//(12)
/*
var arr=[];
for(let i=0; i<10; i++)
{
	arr.push(prompt("Enter a number to store:"));
	console.log(arr[i]);
}
*/

//(13)
/*
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var sum=num1+num2;
console.log(`the sum is ${sum}`);
*/

//(14)
/*
var result=1;
var num = Number(prompt("Enter the number:"));
for (let i=1 ;i<=num;i++)
{
	result*=i;
}
console.log(`The result is ${result}`);
*/

//(15)
/*
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
*/