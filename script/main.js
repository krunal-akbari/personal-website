function hamburger(){
    var test= document.getElementById("hamburger").innerText;
    if( test==="☰"){
        document.getElementById("hamburger").innerHTML = "&#x2715";
        document.getElementById("hamburger-menu").style.display = "block";
    }else if(test==="✕"){
        document.getElementById("hamburger").innerHTML = "&#9776;";
        document.getElementById("hamburger-menu").style.display = "none";}
}
//&#x2715;
