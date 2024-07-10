function setCookie() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    var key1 = document.getElementById("txt1").name;
    var key2 = document.getElementById("txt2").name;
    var key3= document.getElementById("color").name;
    var key4 = document.querySelector('input[name="gender"]:checked');
    var val1 = document.getElementById("txt1").value;

    var val2 = document.getElementById("txt2").value;
    var val3 = document.getElementById("color").value;
    var val4 = document.querySelector
    document.cookie = key1 + "=" + val1 + ";expires=" + date.getUTCDate();
    document.cookie =
      key2 + "=" + val2 + ";expires=" + date.getUTCDate();
    document.cookie =key3 + "=" + val3 + ";expires=" + date.getUTCDate();
    document.cookie = "gender=" + key4.value + ";expires=" + date.toUTCString();
}

function getAllCookies() {
    var associativeCookies = [];
    console.log(document.cookie);
    var cookies = document.cookie.split(";");
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
      associativeCookies[cookies[i].split("=")[0].trim()] = cookies[i]
        .split("=")[1]
        .trim();
    }
    return associativeCookies;
}


function getInfo() {
    var associativeCookies = [];
    // console.log(document.cookie);
    var cookies = document.cookie.split(";");
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
        associativeCookies[cookies[i].split("=")[0].trim()] = cookies[i]
        .split("=")[1]
        .trim();
    }
    return associativeCookies;
}


function displayWelcome() {
    var cookies = getAllCookies();
    var name = cookies.fname;
    var email = cookies.email;
    var elem = document.getElementsByTagName("h1")[0];
    var gender=1;
    if(cookies.gender=='male'){
        gender=1;
    }else{
        gender=2;
    }
    var visitCount = countVisits();
    elem.innerHTML =
      "<img src=../Images/"+gender+".jpg"+"> <br>"+
      "Welcome " + 
      "<span style='color:" + cookies.color + "'>" +
      name +
      "</span> !"+
      ",  your Age is : " + "<span style='color:" + cookies.color + "'>"+
      email + "</span>" + ", you have visited this page " +"<span style='color:" + cookies.color + "'>"+
       visitCount+ "</span>" + " times";

    // elem.style.color = cookies.color;
  }

  function keydown(e){
    if (!e) e = window.event;
    if (e.shiftKey) {
        alert('shift is down, ascii code is ' + e.keyCode+'and binary is '+e.keyCode.toString(2));
    }
    if (e.altKey) {        
        alert('alt is down, ascii code is ' + e.keyCode+'and binary is '+e.keyCode.toString(2));
    }
    if (e.ctrlKey) {        
        alert('CTRL is down, ascii code is ' + e.keyCode+'and binary is '+e.keyCode.toString(2));
    }
    if (e.metaKey) {        
        alert('Meta is down, ascii code is ' + e.keyCode+'and binary is '+e.keyCode.toString(2));
    }
  }

  function rightClick(event){
    event.preventDefault();
        alert('Right Clicked');
  }

  function hasCookie(nameCookie){
    var cookies = getAllCookies();
    if(cookies.nameCookie){
        return true;
    }
    return false;
  }

  function deleteCookie() {
    var cookies = getAllCookies();
    for (var key in cookies) {
      document.cookie = key + "=;expires=03-03-2002";
    }
    location.reload();location.reload();
  }
function countVisits() {
    var cookies = getAllCookies();
    var visitCount = cookies.visitCount ? parseInt(cookies.visitCount) : 0;
    visitCount++;
    var date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = "visitCount=" + visitCount + ";expires=" + date.toUTCString();
    return visitCount;
}

