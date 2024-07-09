img=document.getElementById("img");
function prev(){
    index=parseInt(img.src.split("/")[4].split(".")[0]);
    if(index!=1){
        img.src="../images/"+(index-1)+".jpg";
    
    }
}

function slide(val){
    index=parseInt(img.src.split("/")[4].split(".")[0]);
    if(index!=6){
        img.src="../images/"+(index+1)+".jpg";
        slideTimeout = setTimeout(slide, 2000);
    }
    else{
        clearTimeout(slideTimeout);
    }
}

function stop(){
    clearTimeout(slideTimeout);
}
function next(){
    index=parseInt(img.src.split("/")[4].split(".")[0]);
    if(index!=6){
        img.src="../images/"+(index+1)+".jpg";
    }
}

function EnterNumber(val){
    document.getElementById("Answer").value+=val;
}
nums=[]
function EnterOperator(op){
    nums.push(document.getElementById("Answer").value);
    document.getElementById("Answer").value="";
    nums.push(op);
}
function EnterEqual(){
    nums.push(document.getElementById("Answer").value);
    let exp=nums.join("");
    document.getElementById("Answer").value=eval(exp);
}

function EnterClear(){
    document.getElementById("Answer").value="";
    nums=[];
}

function firstlook(){
    setTimeout(function() {
        document.getElementById("11").src="../images/Moon.gif";
        document.getElementById("12").src="../images/Moon.gif";
        document.getElementById("21").src="../images/Moon.gif";
        document.getElementById("22").src="../images/Moon.gif";
        document.getElementById("31").src="../images/Moon.gif";
        document.getElementById("32").src="../images/Moon.gif";
        document.getElementById("41").src="../images/Moon.gif";
        document.getElementById("42").src="../images/Moon.gif";
        document.getElementById("51").src="../images/Moon.gif";
        document.getElementById("52").src="../images/Moon.gif";
        document.getElementById("61").src="../images/Moon.gif";
        document.getElementById("62").src="../images/Moon.gif";
    }, 3000);
}

var nums=[]
function reveal(val){
    var num=val.id;
    if(nums.includes(num)){
        alert("Already Selected, please select another Image");
    }else if(parseInt(nums[0])-parseInt(num)==1||parseInt(nums[0])-parseInt(num)==-1){
        // console.log(parseInt(nums[0])/10+" "+parseInt(num)/10);
        document.getElementById(num).src="../images/"+Math.floor(parseInt(num)/10)+".gif";
        nums=[];
    }else{
        if(nums.length==1){
        console.log(parseInt(nums[0])/10+" "+parseInt(num)/10);

            document.getElementById(num).src="../images/"+Math.floor(parseInt(num)/10)+".gif";
            setTimeout(function() {
                document.getElementById(nums[0]).src="../images/Moon.gif";
                document.getElementById(num).src="../images/Moon.gif";
                nums=[];
            }, 1000);
        }else if(nums.length==0){
            nums.push(num);
        console.log(parseInt(nums[0])/10+" "+parseInt(num)/10);

            document.getElementById(num).src="../images/"+Math.floor(parseInt(num)/10)+".gif";
        }else{

        }
    }
}
