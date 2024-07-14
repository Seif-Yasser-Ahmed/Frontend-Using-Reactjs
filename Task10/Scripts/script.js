function change(){
    var input = document.getElementById('username').value;
    var isSequence = /^[a-zA-Z]+$/.test(input);
    var input2= document.getElementById('email').value;
    var isSequence2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(input2);
    if(!isSequence){
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('message1').style.display = "block";
    }else{
        document.getElementById('username').style.borderColor = "green";
        document.getElementById('message1').style.display = "none";
    }
    if(!isSequence2){
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('message2').style.display = "block";
    }else{
        document.getElementById('email').style.borderColor = "green";
        document.getElementById('message2').style.display = "none";
    }
    if(isSequence && isSequence2){
        window.location.href = "index2.html";
    }

}

function change2(){
    window.location.href = "index3.html";
}
