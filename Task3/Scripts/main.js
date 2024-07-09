var seifsTask=Number(prompt("Enter the task number"));
switch(seifsTask){
    case 1:
        task1();
        break;
    case 2:
        task2();
        break;
    case 3:
        task3();
        break;
    case 4:
        task4();
        break;
    default:
        console.log("Invalid task number");
        alert("Invalid task number");
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1.1
function task1(){
    console.log("Task 1");
var input=prompt("Enter the message to be displayed");
for(var i=1;i<7;i++){
    document.write("<h"+i+">"+input+"</h"+i+">"+"<br>");
}
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1.2
function task2(){
var input;
var sum=0;
do{
    input=Number(prompt("Enter a number"));
    sum+=input;
    console.log("Sum is "+sum);
}while(input!=0&&sum<=100)
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1.3
function task3(){
var x=Number(prompt("Enter a number to be checked"));
var y=Number(prompt("Enter a number "));
var z=Number(prompt("Enter a number"));
var div1=x%y;
var div2=x%z;
if(div1==0&&div2==0){
    console.log(x+" is divisible by "+y+" and "+z);
    alert(x+" is divisible by both "+y+" and "+z);
}else if(div1==0){
    console.log(x+" is divisible by "+y);
    alert(x+" is divisible by "+y+" Only ");
}else if(div2==0){
    console.log(x+" is divisible by "+z);
    alert(x+" is divisible by "+z+" Only ");
}else{
    console.log(x+" is not divisible by "+y+" and "+z);
    alert(x+" is not divisible by "+y+" and "+z);
}
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1.4
function task4(){
var x;
var y;
var z;

x=Number(prompt("Enter the starting number X"));
y=Number(prompt("Enter the ending number Y"));

while(isNaN(x)||isNaN(y)||x>y||x<0||y<0){
    console.log("Invalid X or Y");
    alert("Invalid X or Y");
    x=Number(prompt("Enter the starting number"));
    y=Number(prompt("Enter the ending number"));
}
z=prompt("Enter the type of numbers to be displayed(odd/even/no) Z");
while(z!="odd"&&z!="even"&&z!="no"){
    console.log("Invalid Z");
    alert("Invalid Z");
    z=prompt("Enter the type of numbers to be displayed(odd/even/no) Z");
}

var sum=0;
if(z=="odd"){
    for(var i=x;i<=y;i++){
        if(i%2==1){
            console.log(i);
            sum+=i;
        }
    }
}else if(z=="even"){
    for(var i=x;i<=y;i++){
        if(i%2==0){
            console.log(i);
            sum+=i;
        }
    }
}else if(z=="no"){
    for(var i=x;i<=y;i++){
        console.log(i);
        sum+=i;
    }
}
console.log("Sum of numbers is "+sum);
alert("Sum of numbers is "+sum);
}