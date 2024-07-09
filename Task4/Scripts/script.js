function main(){
    var prom=prompt("Enter the task number \n1. Count the number of occurences of a character in a string\n2. Check if a string is palindrome\n3. Find the longest word in a string\n0. Exit");
    switch(prom) {
        case "1":
            task1();
            main();
            break;
        case "2":
            console.log("Task 2")
            task2();
            main();
            break;
        case "3":
            task3();
            main();
            break;
        default:
            alert("Invalid task number");
            main();
            break;
    }
}
main();
function task1(){
    var promot=prompt("Enter the string");
    var char=prompt("Enter the character to check number of occurences");
    
    var caseSensitive=prompt("Enter 1 for case sensitive and 0 for case insensitive");
    var count=0;
    if(caseSensitive==1){
        for(var i=0;i<promot.length;i++){
            if(promot[i]==char){
                count++;
            }
        }
        console.log("The number of occurences of "+char+" is "+count);
    }
    else{
        for(var i=0;i<promot.length;i++){
            if(promot[i].toLowerCase()==char.toLowerCase()){
                count++;
            }
        }
        console.log("The number of occurences of "+char+" is "+count);
    }
    alert("The number of occurences of "+char+" is "+count); 
}

function task2(){
    var str=prompt("Enter the string");
    var caseSensitive=prompt("Enter 1 for case sensitive and 0 for case insensitive");
    if(caseSensitive==1){
        for(var i=0;i<str.length/2;i++){
            if(str[i]==str[str.length-i-1]){
                continue;
            }
            else{
                alert("The string is not a palindrome")
                return 0;
            }
        }
        alert("The string is a palindrome")
    }
    else if(caseSensitive==0){
        for(var i=0;i<str.length/2;i++){
            if(str[i].toLowerCase()==str[str.length-i-1].toLowerCase()){
                continue;
            }else{
                alert("The string is not a palindrome")
                return 0;
            }
        }
        alert("The string is palindrome")
    }
}

function task3(){
    var str=prompt("Enter the string");
    liststr=str.split(" ");
    max=0;
    index=0;
    for(var i=0;i<liststr.length;i++){
        if(liststr[i].length>max)
        {
            max=liststr[i].length;
            index=i;
        }
    }
    console.log("The longest word is "+liststr[index]);
    alert("The longest word is "+liststr[index]+" with length "+max);


}
