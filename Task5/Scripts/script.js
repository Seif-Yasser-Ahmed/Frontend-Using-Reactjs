function main(){
    var number = prompt("Enter the task number:\n 1-Task 1\n 2-Task 2\n 3-Task 3\n 0-Exit");
    switch(number){
        case "1":
            task1();
            main();
            break;
        case "2":
            task2();
            main();
            break;
        case "3":
            task3();
            main();
            break;
        case "0":
            break;
        default:
            break;
    }

}


function task1(){
    var values = [];
    for (let i = 0; i < 5; i++) {
        var value = prompt(`Enter value`+ (i + 1)+":");
        values.push(Number(value));
    }
    var ascendingOrder = values.slice().sort(function(a, b) {
        return a - b;
    });
    var descendingOrder = values.slice().sort(function(a, b) {
        return b - a;
    });


    console.log("Descending order:", descendingOrder);
    console.log("Ascending order:", ascendingOrder);
    alert("Descending order:"+ descendingOrder +"\nAscending order:"+ ascendingOrder);
}


function task2(){
    var number = prompt("Enter The operation:\n 1-Calculate the area of a circle\n 2-Calculate square root \n 3-Calculate cos value of an angle\n");
    switch(number){
        case "1":
            var r=prompt("Enter the radius of the circle:");
            alert("The area of the circle with radius " + r +" is: "+(Math.PI*Math.pow(r,2)));
            break;
        case "2":
            var num=prompt("Enter the number:");
            alert("The square root of " + num +" is: "+Math.sqrt(num));
            break;
        case "3":
            var angle=prompt("Enter the angle:");
            alert("The cos value of the angle is: "+Math.cos((angle*Math.PI/180)));
            break;
        default:
            break;
    }
}

function task3(){
    var obj = {
        name: "ali",
        age: 10,
        address: "123.str",
    };
    var name = prompt("Enter the name:");
    alert("Age: "+dispVal(obj,name));
    
}

function dispVal(obj,val){
return obj["name"]==val?obj["age"]:"Not Found";
}

main();