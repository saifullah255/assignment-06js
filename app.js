// ------------------------------assignment #06---------------------------------



// Chapter 21 - 25

// Task 1

var a,b,c,d,e,f,c1,d1;
a=prompt("Enter First Name: ")
b=prompt("Enter Last Name: ")
c=a.slice(0,1)
d=b.slice(0,1)
c=c.toUpperCase()
d=d.toUpperCase()
c1=a.slice(1)
d1=b.slice(1)
e=c+c1
f=d+d1
alert("Your Name: "+e+" "+f)

// Task 2

var mobile,a;
mobile=prompt("Enter Your favourite Mobile: ")
a=mobile.length
document.write("My favourite Phone is:"+mobile+"<br>")
document.write("Length of String: "+a)

// Task 3

var a,b;
a="Pakistan"
for(b=0; b<a.length; b++){
    if(a.charAt(b)==="n"){
        document.write("String: "+a+"<br>")
        document.write("Length of 'n': "+b)
        break;
    }
} 

// Task 4

var index,a,b;
a="Hello world"
index=-1
for(b=0;b<a.length;b++){
    if(a.charAt(b)==="l"){
        index=b
    }
}

if(index===-1){
    alert("Character Not found")
}else{
    document.write("String:"+a+"<br>")
    document.write("Last Index of 'l': "+index)
}

// Task 5

var a,b;
a="Pakistan"
for(b=0;b<a.length;b++){
    if(a.charAt(b)==="i"){
        document.write("String: "+a+"<br>")
        document.write("Charcter index at "+b+" i")
        break;
    }
}

// Task 6

var a,b,c,d,e,f,c1,d1;
a=prompt("Enter First Name: ")
b=prompt("Enter Last Name: ")
c=a.slice(0,1)
d=b.slice(0,1)
c=c.toUpperCase()
d=d.toUpperCase()
c1=a.slice(1)
d1=b.slice(1)
e=c.concat(c1)
f=d.concat(d1)
alert("Your Name "+e.concat(f))

// Task 7

var city,a,city1;
city1="Heyderabad"
a=city1.indexOf("Heyder")
if(a!==-1){
    city="Islm"+city1.slice(a+6)
    document.write("City: "+city1+"<br>")
    document.write("After Repalcement: "+city)
}

// Task 8

var message;
message="Ali and Sami are best friends. They play cricket and football together"
document.write("<h1>Original Text</h1><br>"+message+"<br>")
message=message.replace(/and/g,"&");
document.write("<h1>Converted Text</h1><br>"+message)

// Task 9

var a,b;
a="472"
b=parseInt(a)
document.write("Value: "+a+"<br>")
document.write("Type: "+typeof a+"<br>")
document.write("Value: "+a+"<br>")
document.write("Type: "+typeof b)

// Task 10

var a,b;
a=prompt("Enter something: ")
b=a.toUpperCase()
document.write("User Input: "+a+"<br>")
document.write("Converted Input:"+b)

// Task 11

var a,b,c,d;
a=prompt("Enter Somthing: ")
b=a.slice(0,1)
c=a.slice(1)
d=b.toUpperCase()
document.write("User Input: "+a+"<br>")
document.write("Titled Case: "+d+c)

// Task 12

var a,b,c,d,e;
a=35.36;
b=a.toString()
c=b.slice(0,2)
d=b.slice(3,5)
e=c+d
document.write("Number: "+a+"<br>")
document.write("Result: "+e)

// Task 13

var a,b,c,d,e;
a=prompt("Enter: ")
e=[]
for(b=0;b<a.length;b++){
    c=a.charCodeAt(b)
    d=e.push(c)
}
for(i=0;i<e.length;i++){
    if(e[i]===33||e[i]===44||e[i]===46||e[i]===64){
        alert("please enter a valid username")
    }
}

// Task 14

var A,a,b,c,d;
A=["cake", "apple pie", "cookie", "chips", "patties"]
a=prompt("Welcome to ABC Bakery what do you wand to order sir/ma'am")
b=a.toLowerCase()

d=A.indexOf(b)
if(b===A[0]){
    document.write(b+" is <b>avaliable</b> at index "+d+" in our bakery<br>") 
}
else if(b===A[1]){
    document.write(b+" is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[2]){
    document.write(b+" is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[3]){
    document.write(b+" is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[4]){
    document.write(b+" is <b>avaliable</b> at index "+a+" in our bakery<br>")
}
else{
    document.write("We are sorry."+b+" is <b>not avaliable</b> in our bakery<br>")
}

// Task 15

var a,b,c,d,e;
a=prompt("Enter: ")
e=[]
for(b=0;b<a.length;b++){
    c=a.charCodeAt(b)
    d=e.push(c)
}
document.write("Passwors: "+a+"<br>")
for(i=0;i<e.length;i++){
    if(e[i]===48||e[i]===49||e[i]===50||e[i]===51||e[i]===52||e[i]===53||e[i]===54||e[i]===55||e[i]===56||e[i]===57){
        document.write("Password Cannot Begin with a number<br>")
        document.write("Please Enter Valid Password")
        break;
    }
}

// Task 16

var uni="Universiy of Karachi"
var a=uni.split("")
for(var i=0;i<a.length;i++){
    document.write(a[i]+"<br>")
}

// Task 17

var a,b;
a=prompt("Enter: ")
b=a.substring(a.length-1)
document.write("User Input: "+a+"<br>")
document.write("Last Character of Input: "+b)

// Task 18

var a;
a="The quick brown fox jumps over the lazy dog"
document.write("Text: "+a+"<br>")
a=a.toLowerCase()
var count = (a.match(/the/g) || []).length;
document.write("There are "+count+" occurence(s) of word 'the'")


// ******************************************************************************


// Chapter 26-30

// Task 1

var a,b;
a=prompt("Enter Posivit Integer Number: ")
b=Math.round(a)
c=Math.floor(a)
d=Math.ceil(a)
document.write("Number: "+a+"<br>")
document.write("round off value: "+b+"<br>")
document.write("floor value: "+c+"<br>")
document.write("ceil value: "+d+"<br>")

// Task 2

var a,b;
a=prompt("Enter Negative Integer Number: ")
b=Math.round(a)
c=Math.floor(a)
d=Math.ceil(a)
document.write("Number: "+a+"<br>")
document.write("round off value: "+b+"<br>")
document.write("floor value: "+c+"<br>")
document.write("ceil value: "+d+"<br>")

// Task 3

var a,b,c,d;
a=-4;
b=-5
c=Math.abs(a)
d=Math.abs(b)
document.write("The absolute value of -4 is "+c+"<br>")
document.write("The absolute value of -5 is "+d+"<br>")

// Task 4

var a,b;
a=Math.random()*6
b=Math.ceil(a)
document.write("random dice value: "+b)

// Task 5

var a,b;
a=Math.random()*2
b=Math.ceil(a)
if(b===1){
    document.write(b+"<br>")
    document.write("random coin value Tails")
}else if(b===2){
    document.write(b+"<br>")
    document.write("random coin value Heads")
}

// Task 6

var a,b;
a=Math.random()*100
b=Math.ceil(a)
document.write("random number between 1 and 100 :"+b)

// Task 7

var a,b,c;
c=prompt("Enter Your weight: ") 
a=(Math.random() * (60 - 50 + 1) + 50)
document.write("The Weight of user is "+a.toFixed(1)+" Kilograms")

// Task 8

var a,b;
a=Math.random()*10
b=Math.floor(a)
guess=+prompt("Guess the number between 1 to 10:")
// document.write(b)
for(c=1;c<=b;c++){
    if(guess<b){
        alert("Guess Higer Value to Close enough to the correct answer")
        guess=+prompt("Guess the number between 1 to 10:")
    } 
    else{
        alert("Guess Lower value to Close enough to the correct answer")
        guess=+prompt("Guess the number between 1 to 10:")
    }
}
alert("Bingo! You Guesses the Correct number")

// ***********************************************************************

// Chapter 31 - 34

// Task 1

var today = new Date();
document.write(today)

// Task 2

var a,b,month;
month=["Januvary","Febary","March","April","May","June","July","August","September","November","Deceember"]
a= new Date();
b=a.getMonth()
document.write("Current Month: "+month[b])

// Task 3

var a,b,date;
date=new Date();
a=date.toString()
b=a.slice(0,4)
document.write("Today is "+b)

// Task 4

var a,b,day;
day=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
a= new Date();
b=a.getDay()
if(b===5||b===6){
    document.write("Its Fun Day")
}

// Task 5

var a,b,c;
a= new Date();
b=a.getDate();
if(b<=15){
    document.write("First Fiftenn Days of Month.")
}else{
    document.write("Last days of month")
}

// Task 6

var a,b,c;
a= new Date();
b=a.getTime()
c=b/60000
document.write("Current Date : "+a+"<br>")
document.write("Elapsed miliseconds sice Javuvary 1, 1970 : "+b+"<br>")
document.write("Elapsed minutes sice Javuvary 1, 1970 : "+c+"<br>")

// Task 7

var a,b,c,d;
a=new Date();
b=a.toString()
c=b.slice(16,18)
d=parseInt(c)
if(d<=12){
    document.write("Its AM")
}else{
    document.write("Its PM")
}

// Task 8

var a,b,c;
a=new Date('Dec 31, 2020')
document.write("Later Date: "+a)

// Task 9

var today,ramazan,a,b,c;
today= new Date();
ramazan= new Date('apr 23, 2020')
a=today.getTime()
b=ramazan.getTime()
c=a-b
var d=c/86400000
var e=Math.floor(d)
document.write(e+" days has been passes since 1st Ramazan 2020")

// Task 10

var today,first,a,b,c;
today= new Date();
a=today.getTime();
first=new Date('Jan 1, 2020')
b=first.getTime();
c=a-b;
var d=c/1000
d=Math.floor(d)
document.write("On reference Date: "+today+"<br>")
document.write(d+" seconds has passed since begnning of 2020")

// Task 11

var today,a,b,c;
today=new Date()
a=today.getHours();
document.write("Current Date: "+today+"<br>")
document.write(a+" hour ago, it was "+today)

// Task 12

var a,b,c;
a=new Date('june 18, 2020')
b=new Date('June 18, 1920')
alert("Current Date: "+a)
alert("100 years back it was "+b)

// Task 13

var a,b,c,d,e;
c=prompt("Enter your date of birth: ")
a=new Date()
b=new Date(c)
a=a.getTime();
b=b.getTime();
d=a-b;
e=d/(1000*60*60*24*12*30)
e=Math.floor(e)
document.write("Your Age: "+e+"<br>")
document.write("Your Birth year is: "+c.slice(6))

// Task 14

var a,b,c;
c=["Januvay","February","March","April","May","June",'July',"August","September","November","Dcember"]
a=new Date()
b=a.getMonth();
d=16;e=410;f=350;
document.write("<h1>K-Electric Bill</h1><br><br>")
document.write("Coustomer Name: <b>ABC Customer</b><br>")
document.write("Month : "+"<b>"+c[b]+"</b><br>")
document.write("Charged per unit: "+"<b>"+d*e+"</b><br><br>")

document.write("Net Amount Payable (within Due Date) : "+"<b>"+e+"</b><br>")
document.write("Late Payment Surcharge: "+"<b>"+f+"</b><br></br>")
document.write("Gross Amount Payable (after Due Date): "+"<b>"+((d*e)+f)+"</b><br>")





//-----------------------------------------**************************------------------------------------

//  Chapter 35 - 38

// Task 1

function time(){
    var a;
    a=new Date()
    alert(a)
}

time()

// Task 2

function fullname(firstName="Muhammad",lastName="Usman Khan"){
    alert(firstName+" "+lastName)
}

fullname()

// Task 3

function add(a,b){
    var c=a+b
    alert("The addition Result: "+c)
}

var a,b;
a=+prompt("Enter First Number: ")
b=+prompt("Enter Second Number: ")
add(a,b)

// Task 4

function cal(num1,opr,num2){
    var c;
    if (opr==="+"){
        alert("The Addition Result: "+(c=num1+num2))
        return c;
    }
    else if(opr==="-"){
        alert("The Subtraction Result: "+(c=num1-num2))
        return c
    }
    else if(opr==="*"){
        alert("The Multiplication Result: "+(c=num1*num2))
        return c
    }
    else if(opr==="/"){
        alert("The Division Result: "+(c=num1/num2))
        return c;
    }
    else if(opr==="%"){
        alert("The Reminder Result: "+(c=num1%num2))
        return c;
    }
}


var num1,num2,opr;
num1=+prompt("Enter First Number=")
opr=prompt("Enter Operator: ")
num2=+prompt("Enter Second Number=")
cal(num1,opr,num2)



// Task 5

function square(a){
    var c;
    c=a*a
    return c;
}
var s;
s=square(11)
alert("The Square Root is :"+s)

// Task 6

function factorial(n){
    var a=1;
    for(var i=n;i>=1;--i){
        a=a*i
    }
    return a;
}

var ans,num;
num=+prompt("Enter Number: ")
ans=factorial(num)
alert("The Factorial of "+num+"="+ans)

// Task 7

function counts(start,end){
    var a;
    document.write('The Counting<br>')
    for(var i=start;i<=end;i++){
        document.write(i+"<br>")
    }
}

var satrt,end;
start=+prompt("Enter the Start Number: ")
end=+prompt("Enter the End Number: ")
counts(start,end)

// Task 8

function hyp(side1,side2){
    var h;
    h=Math.pow(side1,2)+Math.pow(side2,2);
    return h
}

var base,perpendicular;
base=+prompt("Enter Value of Base: ")
perpendicular=+prompt("Enter Value of Perpendicular: ")

function sqare(){
    var h1,h2;
    h1=hyp(base,perpendicular)
    h2=Math.sqrt(h1)
    return h2;
}

var a;
a=sqare()
alert("The Hypothenus = "+a)

// Task 9

function rceat(width,height){
    var A;
    A=width*height
    return A;
}
var a;
a=rceat(22,34)
alert("The Area of Reactange is: "+a)

a=(rceat(width=34,height=11))
alert("The Area of Reactange is: "+a)

// Task 10

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return alert("The Word is not Palindrome");
        }
    }

    return alert("The Word is Palindrome");
}

palindrome("madam")

// Task 11

function stringUpper(str){
    var a,b,c,d;
    a=str.slice(0,1)
    b=str.slice(1,3)
    c=a.toUpperCase()
    d=c+b

    var a1,b1,c1,d1;
    a1=str.slice(4,5)
    b1=str.slice(5,9)
    c1=a1.toUpperCase()
    d1=c1+b1

    var a2,b2,c2,d2;
    a2=str.slice(10,11)
    b2=str.slice(11,15)
    c2=a2.toUpperCase()
    d2=c2+b2

    var a3,b3,c3,d3;
    a3=str.slice(16,17)
    b3=str.slice(17,19)
    c3=a3.toUpperCase()
    d3=c3+b3

    var a4;
    return a4=d+" "+" "+d1+" "+d2+" "+d3
}
var a;
a=stringUpper("the quick brown fox")
alert(a)

// Task 12

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var a;
a=longestWord("Web Development Tutorial")
alert("The Longest Word in a string")

// Task 13

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++){
        if (str.charAt(position) == letter){
        letter_Count += 1;
        }
    }
    return letter_Count;
}

var a;
a=char_count('JSResourceS.com', 'o')
alert("The Occurence of letter is: "+a)

// Task 14

function calcCircunference(radius,pi=3.142){
    var cir;
    cir=2*radius*pi
    return cir;
}

function calcArea(radius,pi=3.142){
    var area;
    area=pi*Math.pow(radius,2)
    return area;
}

var a,b,c;
a=+prompt("Enter Radius: ")
b=calcCircunference(a)
c=calcArea(a)
alert("The Circumference : "+b)
alert("The Area is : "+c)